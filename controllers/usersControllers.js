//*Requiring Fetch
const {petition} = require('../helpers/fetch');

//*Index View - RENDER
const showIndex = async (req,res) => {

    try {
        
        const articles = await petition(`${(process.env.URLBASEMONGO)}`, "GET", req.body)

        const results = articles.articles
    
        res.render('./userViews/index', {results})

    } catch (error) {
        
        console.log('FAILED rendering Index')

    }
}

//*readMore View - RENDER
const showMore = async (req,res) => {

    try {
        const id = req.params.id

        const articles = await petition(`${(process.env.URLBASEMONGO)}${id}`, "GET", req.body)
        
        const results = articles.data
        
        res.render('./userViews/readMore', {results})

    } catch (error) {
        
        console.log(error, 'Failed rendering Read More')

}}

//*Search Results View - Sending QUERY to URL + Render
const showSearchResults = async (req,res) => {
    
    try {
        
        const articles = await petition(`${(process.env.URLBASEMONGO)}search/?search=${req.query.search}`, "GET", req.body)

        const results = articles.articles
    
        res.render('./userViews/userSearchResults', {results})

    } catch (error) {
        
        console.log('FAILED browsing for articles')

    }
}

//*Login View - RENDER
const showLoginForm = async (req,res) => {

    try {
        
        res.render('./userViews/login')

    } catch (error) {
        
        console.log('FAILED rendering Login Form')

    }
}

const loginCheck = async (req,res) => {

    try {
        
        const respuesta = await petition(`${process.env.URLBASEMONGO}admin/login`, "POST", req.body)
        console.log('respuesta del login access:', respuesta)

        if(respuesta.ok){
    
            res.redirect('/admin/dashboard')

        } else {
            console.log('Email/Password incorrect')
        }

    } catch (error) {
        
        console.log('FAILED checking credentials')
    }
}

module.exports = {
    showIndex,
    showMore,
    showSearchResults,
    showLoginForm,
    loginCheck
}