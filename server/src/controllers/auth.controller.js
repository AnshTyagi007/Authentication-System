const register = async (req, res, next) => {
    try {
        res.status(201).json({
            success: true,
            message: "Register endpoint placeholder",
        });
    } catch (err) {
        next(err);
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