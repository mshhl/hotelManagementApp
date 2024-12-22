const {regNumberValidation,addressValidation,hotelNameValidation} = require("../services/hotelValidationService");
const ownerModel = require("../../dataAccessLayer/dataModel/hotelOwnerModel")
const {jwtTokenGen} = require("./jwtauth");
const nodemailer = require("nodemailer");


const  ownerregistrationLoad = function(req,res){
    res.render("hotelOwner/hotelRegistration");
}

const ownerRegistration = async function(req,res){
    try {
        console.log("hello ownerRegistration");
        const {regnumber,address,hotelname,bedroom,livingroom,bathroom,diningroom
            ,internet,refrigerator,tv,washingmachine,vacuum
        } = req.body;
        const {image,document} = req.files;
        console.log("image document printed");
        console.log(image,document);
        
          let result = regNumberValidation(regnumber);
          let result2 = addressValidation(address);
          let result3 = hotelNameValidation(hotelname);
        
          if(typeof result !== "undefined"){
            res.render("hotelOwner/hotelRegistration",{serverMessage:result});
          }else if(typeof result2 !== "undefined"){
              res.render("hotelOwner/hotelRegistration",{serverMessage:result2});
          }else if(typeof result3 !== "undefined"){
           res.render("hotelOwner/hotelRegistration",{serverMessage:result3})
           }else{
           const isThereHotel = await ownerModel.findOne({RegistrationNumber:regnumber})
           if(!isThereHotel){
              
                     const facilitiesArray = []
                     if(bedroom){
                        facilitiesArray.push(bedroom);
                     }
                     if(livingroom){
                        facilitiesArray.push(livingroom);

                     }
                     if(bathroom){
                        facilitiesArray.push(bathroom)
                     }
                     if(diningroom){
                        facilitiesArray.push(diningroom);
                     }
                     if(internet){
                        facilitiesArray.push(internet)
                     }
                     if(refrigerator){
                        facilitiesArray.push(refrigerator)
                     }
                     if(tv){
                        facilitiesArray.push(tv)
                     }
                     if(washingmachine){
                        facilitiesArray.push(washingmachine)
                     }
                     if(vacuum){
                        facilitiesArray.push(vacuum)
                     }
                  const hotel = new ownerModel({
                    RegistrationNumber:regnumber,
                    Address:address,
                    Images:image[0].filename,
                    Documents:document[0].filename,
                    HotelName:hotelname,
                    facilitesMainPage:facilitiesArray
                    

                  })
                  const savedDocument = await hotel.save();
                  if(savedDocument) console.log(savedDocument);
                 
        //       
               
        //       
        //       
               
               
               
               
              
               
               
           }else{
            res.render("hotelOwner/hotelRegistration",{serverMessage:"Hotel  found try again with another"});
           }
    
         }
       
       } catch (error) {
        console.log("registration side:error");
        console.log(error.message);
       }
}
const loadDashboard = function(req,res){
    try {
        console.log("owner Dashboard loaded");
        res.render("hotelOwner/ownerDashboard");
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    ownerregistrationLoad,
    loadDashboard,
    ownerRegistration,
    
}