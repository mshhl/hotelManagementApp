const mongoose = require("mongoose");

const ownerModel = new mongoose.Schema({
    RegistrationNumber:{
        type:String,
        required:[true,"Registration number is required"]
    },
    Address:{
        type:String,
        required:[true,"address is required for the hotel"]
    },
    Images:{type:[String],required:true},
    Documents:{
        type:String,
        required:true
    },
    HotelName:{
        type:String,
        required:true
    },
    facilitesMainPage:[String]

       
})
  ownerModel.index({ HotelName: 'text'})
module.exports = mongoose.model("ownerModels",ownerModel);