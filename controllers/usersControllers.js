//*Requiring Fetch
const {petition} = require('../helpers/fetch');

//*Index View
const showIndex = async (req,res) => {

    try {
        // console.log('this is the index')
        res.render('./userViews/index')

    } catch (error) {

        console.log(error, 'Failed rendering Index')

}}

//*readMore View
const showMore = async (req,res) => {

    try {
        
        res.render('./userViews/readMore')

    } catch (error) {
        
        console.log(error, 'Failed rendering Read More')

}}

module.exports = {
    showIndex,
    showMore
}