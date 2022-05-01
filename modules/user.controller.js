const userService = require('./user.service');


exports.signUpController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await userService.signUpService(requestBody);
        const msg = {
            'message': 'success',
            'data': data
        }
        res.status(201).json(msg);
    } catch (err) {
        const msg = {
            'message': 'fail',
            'data': err.message
        }
        res.status(400).json(msg);
    }
}

exports.loginController = async (req, res, next) => {
    try {
        const body = req.body;
        const data = await userService.loginService(body);
        const msg = {
            'message': 'success',
            'data': data
        }
        res.status(201).json(msg);
    } catch (err) {
        const msg = {
            'message': 'fail',
            'data': err.message
        }
        res.status(400).json(msg);
    }
}
