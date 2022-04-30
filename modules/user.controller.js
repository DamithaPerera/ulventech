const userService = require('./user.service');


exports.signUpController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await userService.signUpService(requestBody);
        res.status(200).json('success');
    } catch (e) {

    }
}
