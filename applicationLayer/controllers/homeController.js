const hotelModel = require("../../dataAccessLayer/dataModel/hotelOwnerModel");
const loadHome = function(req,res){
    console.log("home loaded");
    res.render("users/home");
}
const searchFunctionality = async function(req,res){
    console.log("search functionality worked")
    try {
        const query = req.query.q;
        console.log(query);
       
          const result = await hotelModel.find({$text:{$search:query}})
          console.log(result);
          
          return res.json(result) ;
          
         
        
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    loadHome,
    searchFunctionality
}