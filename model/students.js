const mongoose = require('mongoose');

const { Schema } = mongoose;


const studentSchema = new Schema({

  firstName:{
    type: String,
    required: [true, 'first name is required']
  },
  lastName: {
    type: String,
    required: [true, 'last name is required']
  },
  course: {
    type: String,
    required: [true, 'Course is required']
  },

  year: {
    type: String,
    required: [true, 'Year is Required']
  },
  enrolled: {
    type: Boolean,
    default: false 
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;