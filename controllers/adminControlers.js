//*Requiring Fetch
const {petition} = require('../helpers/fetch');

//*Dashboard
const showDashboardAD = async (req,res) => {

    try {
        
        res.render('./adminViews/adminDash')

    } catch (error) {

        console.log(error, 'Failed rendering Dashboard')

}}

module.exports = {
    showDashboardAD
}



