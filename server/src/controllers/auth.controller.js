const User = require("../models/user.model");

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "Login endpoint placeholder"
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
    login
};