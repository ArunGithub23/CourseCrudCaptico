const Course = require("../models/courseModel");


// Create a course 
const createCourse=async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to create course" });
  }
}

// Get all courses
const getCourses= async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch courses" });
  }
}


//Get course by ID
const getCourseById= async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch course" });
  }
}


// Update a course by ID
const UpdateCourse= async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to update course" });
  }
}


// Delete a course by ID 
const deleteCourse=async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete course" });
  }
}


module.exports = {createCourse,getCourses,UpdateCourse,deleteCourse,getCourseById}