const express=require('express')
const { createCourse, getCourses, getCourseById, UpdateCourse, deleteCourse } = require('../controllers/courseController')


const router=express.Router()

router.post('/createCourse',createCourse)   // create course route
router.get('/getAllCourses',getCourses)          // get all courses route
router.get('/getCourse/:id',getCourseById)          // get course by id route
router.put('/updateCourse/:id',UpdateCourse)          // update course route
router.delete('/deleteCourse/:id',deleteCourse)          // delete course route

module.exports=router