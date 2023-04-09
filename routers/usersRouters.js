const express = require('express');
const router = express.Router();

const { showIndex, showMore, showSearchResults, showLoginForm, loginCheck } = require('../controllers/usersControllers')

//*Show Index Fetch + render
router.get('/', showIndex);

//*Show readMore - Fetch + render
router.get('/read-more/:id', showMore);

//*Show searchResults + Search BTN function
router.get('/search-results', showSearchResults);

//*Show LOGIN Form - render
router.get('/login-form', showLoginForm);

router.post('/login', loginCheck)

module.exports = router;