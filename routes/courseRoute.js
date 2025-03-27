const express=require('express')
const { createCourse, getCourses, getCourseById, UpdateCourse, deleteCourse } = require('../controllers/courseController')
const { validateRequest, courseValidationRules } = require('../middleware/validations')
const authMiddleware = require('../middleware/jwt')


const router=express.Router()

router.post('/createCourse',authMiddleware,courseValidationRules(),validateRequest,createCourse)   // create course route
router.get('/getAllCourses',authMiddleware,getCourses)          // get all courses route
router.get('/getCourse/:id',authMiddleware,getCourseById)          // get course by id route
router.put('/updateCourse/:id',authMiddleware,UpdateCourse)          // update course route
router.delete('/deleteCourse/:id',authMiddleware,deleteCourse)          // delete course route

module.exports=router