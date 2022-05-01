const userRepo = require('./user.repository')
const bcrypt = require("bcrypt");
const util = require('../lib/util');

exports.signUpService = async (requestBody) => {
    const data = await userRepo.signUpEmailCheckRepo(requestBody);
    if (data.length !== 0) {
        throw new Error('Email already exists')
    }
    const user = {
        'email': requestBody.email,
        'name': requestBody.name
    }
    requestBody.accessToken = util.generateAccessToken(user)
    requestBody.password = await bcrypt.hash(requestBody.password, 10)
    await userRepo.signUpRepo(requestBody)
    delete requestBody.password
    return requestBody

}

exports.loginService = async (body) => {
    const data = await userRepo.signUpEmailCheckRepo(body);
    if (data.length === 0) {
        throw new Error('User not found')
    }
    const isCorrect = await bcrypt.compare(body.password, data[0].password)
    if (!isCorrect) {
        throw new Error('Incorrect Password')
    }
    const user = {
        'email': body.email,
        'name': data[0].name,
        'role': data[0].roleId
    }
    body.accessToken = util.generateAccessToken(user)
    delete body.password
    return body

}
