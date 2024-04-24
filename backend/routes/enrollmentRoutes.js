const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentControllers');

router.post('/enroll', enrollmentController.createEnrollment);
router.get('/enroll', enrollmentController.getEnrollment);
router.put('/enroll/:id', enrollmentController.updateEnrollment);
router.delete('/enroll/:id', enrollmentController.deleteEnrollment);

module.exports = router;