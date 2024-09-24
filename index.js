const express = require('express');
const mongoose = require('./db');
const studentModel = require('./model/students');
const studentRoutes = require('./routes/students');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.json({ "message": "Hi cutiee Express" });
});

app.listen(2000, () => {
    console.log("Listening on port 2000");
});
