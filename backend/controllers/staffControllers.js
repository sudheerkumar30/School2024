const Staff = require('../models/Staff');

exports.getStaff = async (req, res) => {
  const staff = await Staff.find();
  res.json(staff);
};

exports.createStaff = async (req, res) => {
  const newStaff = new Staff({
    name: req.body.name,
    position: req.body.position,
  });
  await newStaff.save();
  res.json(newStaff);
};

exports.updateStaff = async (req, res) => {
  const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedStaff);
};

exports.deleteStaff = async (req, res) => {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ message: 'Staff deleted' });
};