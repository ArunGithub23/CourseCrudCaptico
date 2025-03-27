const express=require('express')
const { register, login } = require('../controllers/authController')
const { registerValidationRules, validateRequest, loginValidationRules } = require('../middleware/validations')


const router=express.Router()

router.post('/register',registerValidationRules(),validateRequest,register)   // register route
router.post('/login',loginValidationRules(),validateRequest,login)          // login route

module.exports=router