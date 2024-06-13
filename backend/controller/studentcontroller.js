const Student = require('../model/studentmodel');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a student by ID
exports.updateStudentById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['type', 'name', 'email', 'university', 'age', 'number', 'subjectOfInterest', 'password', 'isActive', 'timeSlotsPerDayInWeekend', 'totalWeekHours'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send();
    }

    updates.forEach((update) => student[update] = req.body[update]);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a student by ID
exports.deleteStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get students by subject of interest
exports.getStudentsBySubject = async (req, res) => {
  try {
    const students = await Student.find({ subjectOfInterest: req.params.subject });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get students by available time slots
exports.getStudentsByTimeSlot = async (req, res) => {
  const { day, time } = req.query;

  if (!day || !time) {
    return res.status(400).send({ error: 'Day and time query parameters are required' });
  }

  try {
    const students = await Student.find({
      [`timeSlotsPerDayInWeekend.${day}`]: time
    });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};



// Get students by combined criteria
exports.getStudentsByCombinedCriteria = async (req, res) => {
  const { subject, day, time } = req.query;

  if (!subject || !day || !time) {
    return res.status(400).send({ error: 'Subject, day, and time query parameters are required' });
  }

  try {
    const students = await Student.find({
      subjectOfInterest:subject,
      [`timeSlotsPerDayInWeekend.${day}`]: time
    });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};
