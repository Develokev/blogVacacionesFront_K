const express = require('express');
const router = express.Router();

const { showIndex, showMore, showSearchResults } = require('../controllers/usersControllers')

//*Show Index Fetch + render
router.get('/', showIndex);

//*Show readMore - Fetch + render
router.get('/read-more/:id', showMore);

//Show searchResults + Search BTN function
router.get('/search-results', showSearchResults);

module.exports = router;