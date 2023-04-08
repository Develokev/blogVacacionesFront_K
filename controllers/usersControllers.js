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

//Search Results View - Sending QUERY to URL + Render
const showSearchResults = async (req,res) => {
    
    try {
        
        const articles = await petition(`${(process.env.URLBASEMONGO)}search/?search=${req.query.search}`, "GET", req.body)

        const results = articles.articles

        console.log(results)
    
        res.render('./userViews/searchResults', {results})

    } catch (error) {
        
        console.log('FAILED browsing for articles')

    }
}

module.exports = {
    showIndex,
    showMore,
    showSearchResults,
}