// studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentcontroller');

// Create a new student
router.post('/', studentController.createStudent);

// Get all students
router.get('/', studentController.getAllStudents);

// Get students by subject of interest
router.get('/subject/:subject', studentController.getStudentsBySubject);

// Get students by available time slots
router.get('/slots', studentController.getStudentsByTimeSlot);

// Get a student by ID - This should be defined last
router.get('/:id', studentController.getStudentById);

// Update a student by ID
router.patch('/:id', studentController.updateStudentById);

// Delete a student by ID
router.delete('/:id', studentController.deleteStudentById);

module.exports = router;
