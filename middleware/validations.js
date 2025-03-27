// middlewares/authValidationMiddleware.js
const { body, validationResult } = require("express-validator");

// Middleware to validate login inputs
const loginValidationRules = () => [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").not().isEmpty().withMessage("Password is required"),
];

// Middleware to validate register inputs
const registerValidationRules = () => [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Middleware to validate course inputs

const courseValidationRules = () => [
    body("courseName").not().isEmpty().withMessage("Course Name is required"),
    body("description").not().isEmpty().withMessage("Description is required"),
    body("instructor").not().isEmpty().withMessage("Instructor is required"),
  ];
  


// Middleware to handle validation errors
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Proceed if no errors
};

module.exports = {
  loginValidationRules,
  registerValidationRules,
  validateRequest,
    courseValidationRules
};
