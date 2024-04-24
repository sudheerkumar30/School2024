const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffControllers');
// router.use(express.json());

router.post('/staff', staffController.createStaff);  //create a staff
router.get('/staff', staffController.getStaff);  //get staff

router.put('/staff/:id', staffController.updateStaff);                          ///upate sstaff
router.delete('/staff/:id', staffController.deleteStaff);                         ////delete staffs


module.exports = router;
