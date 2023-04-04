const express = require('express');
const router = express.Router();

const {showDashboardAD} = require('../controllers/adminControlers')

//Show Dashboard AD
router.get('/dashboard', showDashboardAD);

module.exports = router;

