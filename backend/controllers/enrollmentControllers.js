const Enrollment = require('../models/enrollment');

exports.createEnrollment = async (req, res) => {
    const newEnrollment = new Enrollment({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        grade: req.body.grade,
    });
    await newEnrollment.save();
    res.send('Enrollment added successfully');
};

exports.getEnrollment = async (req, res) => {
    const enrollments = await Enrollment.find();
    res.json(enrollments);
};

exports.updateEnrollment = async (req, res) => {
    await Enrollment.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        grade: req.body.grade,
    });
    res.send('Enrollment updated successfully');
};

exports.deleteEnrollment = async (req, res) => {
    await Enrollment.findByIdAndDelete(req.params.id);
    res.send('Enrollment deleted successfully');
};