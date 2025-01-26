const hotelModel = require("../../dataAccessLayer/dataModel/hotelOwnerModel");
const loadDetailsPage = async function(req,res){
let result;
    try {
        const hotelId = req.query.hotelId;
        result = await hotelModel.findOne({_id:hotelId});


        res.render("users/detailsPage")
    } catch (error) {
        console.log(error.message);
    }
}
function fetchData(req,res){
    try {
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    loadDetailsPage,
    fetchData
}