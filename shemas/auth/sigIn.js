import joi from "joi-oid"

const schema = joi.object({
    email: joi.string().required().email().messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email is not valid',
        'any.required': 'Email is a required field'
    }),
    password: joi.string().required().min(6).max(20).messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must be at least 6 characters long',
        'string.max': 'Password cannot be longer than 20 characters',
        'any.required': 'Password is a required field'
    })
})

export default schema
