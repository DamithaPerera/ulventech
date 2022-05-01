const Joi = require('joi');


exports.login = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required().label('Email Is required'),
        password: Joi.string().required().label('Password Is required')
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};

exports.signUp = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required().label('Name Is required'),
        email: Joi.string().required().label('Email Is required'),
        password: Joi.string().required().label('Password Is required'),
        roleId: Joi.number().required().label('RoleId Is required')
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};

exports.checkIn = (req, res, next) => {
    const schema = Joi.object({
        type: Joi.string().valid('CUSTOMER', 'ADMIN').required().label('Type Is required'),
    });

    const result = schema.validate(req.query);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};
