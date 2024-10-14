const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController');

router.get('/store/courses', MeController.StoreCourses)
router.get('/trash/courses', MeController.trashCourses)

module.exports = router;