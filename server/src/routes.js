const AuthenticationController = require('./controllers/AuthenticationController')
const AuthneticationConotrollerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register',AuthneticationConotrollerPolicy.register,AuthenticationController.register)
}