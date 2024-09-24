const studentService = require('../services/studentServices');

// POST API to add a new student
const addStudent = async (req, res) => {
    try {
        const { firstName, lastName, course, year, enrolled } = req.body;     
const student = await studentService.addStudent({ firstName, lastName, course, year, enrolled });
        res.status(200).json({
            "message": "Student added successfully",
            "student": student
        });
    } catch (err)  {
        res.status(500).json({
            "message": "Error saving student",
            "error": err.message
        });
    }
};

// GET API to get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json({
            "students": students
        });
    } catch (err) {
        res.status(500).json({
            "message": "Error retrieving students",
            "error": err.message
        });
    }
};

// GET API to get a student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({
            
                "message": "Student not found"
            });
        }
        res.status(200).json({
           
            "student": student
        });
    } catch (err) {
        res.status(500).json({
            "status-code": 500,
            "message": "Error retrieving student",
            "error": err.message
        });
    }
};

//edit API to update a student by ID
const updateStudent = async (req, res) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        if (!student) {
            return res.status(404).json({
                "status-code": 404,
                "message": "Student not found"
            });
        }
        res.status(200).json({
            "status-code": 200,
            "message": "Student updated successfully",
            "student": student
        });
    } catch (err) {
        res.status(500).json({
            "status-code": 500,
            "message": "Error updating student",
            "error": err.message
        });
    }
};

// DELETE API to delete a student by ID
const deleteStudent = async (req, res) => {
    try {
        const student = await studentService.deleteStudent(req.params.id);
        if (!student) {
            return res.status(404).json({
                "status-code": 404,
                "message": "Student not found"
            });
        }
        res.status(200).json({
            "status-code": 200,
            "message": "Student deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            "status-code": 500,
            "message": "Error deleting student",
            "error": err.message
        });
    }
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
