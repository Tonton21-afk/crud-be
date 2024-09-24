const Student = require("../model/students");

// add student
const addStudent = async (data) => {
    const { firstName, lastName, course, year, enrolled } = data;

    const newStudent = new Student({
        firstName: firstName,
        lastName: lastName,
        course: course,
        year: year,
        enrolled: enrolled
    });
    return await newStudent.save();
};

// get student by id
const getStudentById = async (id) => {
    return await Student.findById(id);
};

// get all students
const getAllStudents = async () => {
    return await Student.find();
};

// update student
const updateStudent = async (id, data) => {
    return await Student.findByIdAndUpdate(id, {
        firstName: data.firstName,
        lastName: data.lastName,
        course: data.course,
        year: data.year,
        enrolled: data.enrolled
    }, { new: true });
};

// Delete student
const deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id);
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
