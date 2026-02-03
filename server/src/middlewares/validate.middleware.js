const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        const err= new Error(
            error.errors?.[0]?.message || "Invalid request data"
        );
        err.statusCode = 400;
        next(err);
    }
};

module.exports = validate;