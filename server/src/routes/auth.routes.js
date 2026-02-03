const express = require("express");
const validate = require("../middlewares/validate.middleware");
const { registerSchema, loginSchema } = require("../utils/validators/auth.validator");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

module.exports = router;