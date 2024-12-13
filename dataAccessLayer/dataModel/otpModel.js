const mongoose = require("mongoose");
const {Schema} = mongoose;

const otpSchema = new mongoose.Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:[true,"user id is required"]
    },
    otpNumber:{
        type:String,
        required:[true,"otp is required"]
    },
    createdAt:{
        type:Date,
        required:[true,"createdAt date is required"],
        expires:"1m"

    }
})
const otpM = new mongoose.model("userOtp",otpSchema);

module.exports = otpM;