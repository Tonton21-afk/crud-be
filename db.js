const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Antonton12:hcZ7zQdJcoUZ3bCj@cluster0.s0a67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });

module.exports = mongoose; 
