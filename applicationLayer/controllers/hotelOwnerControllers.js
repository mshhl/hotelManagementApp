const  ownerDashboardLoad = function(req,res){
    res.render("hotelOwner/hotelRegistration");
}
const loadDashboard = function(req,res){
    try {
        console.log("owner Dashboard loaded");
        res.render("hotelOwner/ownerDashboard");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    ownerDashboardLoad,
    loadDashboard
}