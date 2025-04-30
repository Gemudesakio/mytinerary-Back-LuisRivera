import User from '../../models/User.js';

export default async (req, res,next) => {
    return res.status(200).json({
        success: true,
        message: 'User signed in successfully',
    })
}