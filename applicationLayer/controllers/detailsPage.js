const loadDetailsPage = function(req,res){
    try {
        res.render("users/detailsPage")
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    loadDetailsPage
}