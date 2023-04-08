const express = require('express');
const router = express.Router();

const {showDashboardAD, showCreateFormAD, createArticleAD, deleteArticleAD, showEditFormAD, editArticleAD} = require('../controllers/adminControlers')
const upload = require('../middlewares/multer') //Requerimos el multer en donde tenemos los FORMs que van a contar con MULTER

//*Show Dashboard AD
router.get('/dashboard', showDashboardAD);

//*Show Create Form
router.get('/create-form', showCreateFormAD);

//*Create article - Ghost
router.post('/create', [upload], createArticleAD);

//*Show Update Form
router.get('/edit-form/:id', showEditFormAD);

//*Update article - Ghost
router.post('/edit/:id', [upload],  editArticleAD);

//*Delete article
router.get('/delete/:id', deleteArticleAD);

module.exports = router;

