const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: String,
    position: String,
});

module.exports = mongoose.model('Staff', StaffSchema);