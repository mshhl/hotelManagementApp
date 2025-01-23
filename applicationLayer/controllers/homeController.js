const { query } = require("express");
const hotelModel = require("../../dataAccessLayer/dataModel/hotelOwnerModel");
const loadHome = function(req,res){
    console.log("home loaded");
    res.render("users/home");
}
const searchFunctionality = async function(req,res){
    console.log("search functionality worked")
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        const query = req.query.q;

        const hotels = await hotelModel.find({HotelName:{$regex:`^${query}`}}).skip(skip).limit(limit);
        console.log(hotels);
        res.json(hotels);
        
    } catch (error) {
        console.log(error.message);
    }
}
const defautlQuery = async function(req,res){
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);

    const hotels = await hotelModel.find().skip(skip).limit(limit);
    console.log(hotels);
    res.json(hotels);

  } catch (error) {
    console.log(error.message);
  }
}
const paginationHandler = function(req,res,next){
   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit);
   const skip = (page-1) * limit;

   query.skip = skip;
   next();
}
module.exports = {
    loadHome,
    searchFunctionality,
    paginationHandler,
    defautlQuery
}