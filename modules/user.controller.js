const userService = require('./user.service');

let msg = {}

exports.signUpController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await userService.signUpService(requestBody);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

exports.loginController = async (req, res, next) => {
    try {
        const body = req.body;
        const data = await userService.loginService(body);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

exports.checkInController = async (req, res, next) => {
    try {
        const type = req.query.type;
        const role = req.user.role
        const data = await userService.checkInService(type, role);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
