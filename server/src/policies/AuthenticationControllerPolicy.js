const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const { error, value } = Joi.validate(req.body, schema);
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    {
                        res.status(400).send({
                            error: 'The email format is incorrect'
                        });
                        break;
                    }
                case 'password':
                    {
                        res.status(400).send({
                            error: 'paaword must contain uppercase letters or lowercase letters or digits and must contain 8-32 characters'
                        });
                        break;
                    }
                default: {
                    res.status({
                        error: 'Invalid registeriton information'
                    });
                    break;
                }
            }
        } else {
            next();
        }
    }
}