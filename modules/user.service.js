const userRepo = require('./user.repository')


exports.signUpService = async (requestBody) => {
    return userRepo.signUpRepo(requestBody);

}
