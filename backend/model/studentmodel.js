const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Helper', 'Seeker'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  university: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  number: {
    type: String,
    required: true,
    unique: true
  },
  subjectOfInterest: {
    type: [String],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  timeSlotsPerDayInWeekend: {
    type: {
        Monday: [String],
        Tuesday: [String],
        Wednesday: [String],
        Thursday: [String],
        Friday: [String],
        Saturday: [String],
        Sunday: [String]
    },
    required: true
},

  totalWeekHours: {
    type: Number,
    required: true,
    min: 0
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
