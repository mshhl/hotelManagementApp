const loadHome = function(req,res){
    console.log("home loaded");
    res.render("users/home");
}
module.exports = {
    loadHome
}