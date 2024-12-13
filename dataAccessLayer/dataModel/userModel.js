const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:[true,"A name is required"],

  },
  mobileNo:{
    type:String,
    required:[true,"A mobile number is required"]
  },
  country:{
    type:String,
    required:[true,"Country is required"]
  },
  username:{
    type:String,
    required:[true,"username is mandatory"]
  },
  password:{
    type:String,
    required:[true,"password is mandatory"]
  }
})

module.exports = new mongoose.model("users",userSchema);