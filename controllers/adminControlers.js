//*Requiring Fetch
const {petition} = require('../helpers/fetch');

//*Dashboard - GET + RENDER
const showDashboardAD = async (req,res) => {

    try {
        
        const articles = await petition(`${(process.env.URLBASEMONGO)}`, "GET", req.body)

        const results = articles.articles
    
        res.render('./adminViews/adminDash', {results})

    } catch (error) {

        console.log(error, 'Failed rendering Dashboard')
}}

//*Create Form - RENDER
const showCreateFormAD = async (req,res) => {

    try {
        
        res.render('./adminViews/createForm')

    } catch (error) {
        
        console.log(error, 'FAILED rendering create form')
}}

//!Create article - Ghost
const createArticleAD = async (req,res) => {

    try {
        const resp = await petition(`${(process.env.URLBASEMONGO)}`, 'POST', req.body);

        res.redirect('/admin/dashboard')

    } catch (error) {
        
        console.log(error, 'FAILED creating new article')
}}

//*EDIT Form - RENDER
const showEditFormAD = async (req,res) => {

    try {
        const id = req.params.id

        const articles = await petition(`${(process.env.URLBASEMONGO)}${id}`, "GET", req.body)

        const results = articles.data
        
        res.render('./adminViews/editForm', {results})

    } catch (error) {
        
        console.log(error, 'FAILED rendering edit form')
}}

//!EDIT article - Ghost
const editArticleAD = async (req,res) => {

    try {
        const id = req.params.id

        await petition(`${(process.env.URLBASEMONGO)}${id}`, 'PUT', req.body);

    } catch (error) {
        
        console.log('FAILED editing selected article')

    }
    return res.redirect('/admin/dashboard')
}

const deleteArticleAD = async (req,res) => {
    
    try {
       const id = req.params.id

       await petition(`${(process.env.URLBASEMONGO)}${id}`, 'DELETE', req.body);

       res.redirect('/admin/dashboard')

    } catch (error) {
        
        console.log(error, 'FAILED deleting article')
    }
}

module.exports = {
    showDashboardAD,
    showCreateFormAD,
    createArticleAD,
    deleteArticleAD,
    showEditFormAD,
    editArticleAD
}