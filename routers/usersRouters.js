const express = require('express');
const router = express.Router();

const { showIndex, showMore } = require('../controllers/usersControllers')

//*Index
router.get('/', showIndex);

//*readMore
router.get('/read-more', showMore);

module.exports = router;