const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    grade: String,
    });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;