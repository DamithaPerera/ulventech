const jwt = require("jsonwebtoken");
const config = require("config");
var urlPattern = require("url-pattern");
var isEmpty = require("is-empty")

exports.authRequest = async (req, res, next) => {
    try {
        if (isGuestAction(req.path, req.method)) {
            next();
        } else {
            let authHeader = req.headers["authorization"];
            authHeader = authHeader.replace("Bearer", "");
            authHeader = authHeader.trim();

            req.user = await jwt.verify(authHeader, config.get("Access_Token"));
            next();
        }
    } catch (e) {
        res.status(403).json(e);
    }
}

const isGuestAction = (url, method) => {
    const isGuestAction = false;
    const guestActions = config.get("api.guestActions");
    for (var i = 0; i < guestActions.length; i++) {
        let pattern = new urlPattern(guestActions[i].url);
        let matchRes = pattern.match(url);

        if (method === guestActions[i].method && matchRes) {
            if (!isEmpty(matchRes.id) && !isEmpty(guestActions[i].ignore)) {
                return _.indexOf(guestActions[i].ignore, matchRes.id) <= -1;
            } else {
                return true;
            }
        }
    }
    return isGuestAction;
};
