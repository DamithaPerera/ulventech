const userRepo = require('./user.repository')
const bcrypt = require("bcrypt");
const util = require('../lib/util');

exports.signUpService = async (requestBody) => {
    const data = await userRepo.signUpEmailCheckRepo(requestBody);
    if (data.length !== 0) {
        throw new Error('Email already exists')
    } else {
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


}
