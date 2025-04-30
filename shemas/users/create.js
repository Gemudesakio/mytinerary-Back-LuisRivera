import joi from 'joi-oid';

const schema = joi.object({
    name: joi.string().min(5).required().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/).messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Name cannot be empty',
        'string.min': 'Name must be at least 5 characters long',
        'string.pattern.base': 'Name can only contain letters and spaces',
        'any.required': 'Name is required'
    }),
    email: joi.string().email().required().messages({
        'string.base': 'Email must be a string',
        'string.email': 'Email must be a valid email address',
        'string.empty': 'Email cannot be empty',
        'any.required': 'Email is required'
    }),
    password: joi.string().min(8).required().messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must be at least 8 characters long',
        'any.required': 'Password is required'
    }),
    photo: joi.string().uri().messages({
        'string.base': 'Photo must be a string',
        'string.uri': 'Photo must be a valid URI',
        'string.empty': 'Photo cannot be empty'
    }),
    role: joi.number().min(1).max(3).required().messages({
        'number.base': 'Role must be a number',
        'number.min': 'Role must be at least 1',
        'number.max': 'Role must be at most 3',
        'any.required': 'Role is required'
    })
});

export default schema;