const otpModel = require("../../dataAccessLayer/dataModel/otpModel");
const userModel = require("../../dataAccessLayer/dataModel/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getOtpPage = function(req,res){

    res.render("users/otp");

}
const otpVerification = async function(req,res){
    try {
        console.log("entered into otpVerificatin")
        const {otp} = req.body;
        console.log(otp);
        const result = await otpModel.findOne({otpNumber:otp});
        console.log("hello after result")
        console.log(result);
        if(result !== null){
            const user = await userModel.findOne({_id:result.user_id});
            console.log(user)
            if(!user){
                res.render("users/otp",{serverMessage:"otp expired resend otp and try again"})
                return;
            }
            
           
            if(otp !== result.otpNumber){
                res.render("users/otp",{serverMessage:"otp doesn't match try again"});
                return
            }else{
                console.log("otp is correct access granted ");
                const jwtSecret = process.env.JWT_SECRET_KEY;
               const token = jwt.sign({email:user.email},jwtSecret,{expiresIn:"5m"})
                res.cookie("jwt",token,{httpOnly:true,secure:true})
                res.redirect("/home");
           
               
                
            }

        }
    } catch (error) {
        console.log(error.message);
    }

}





module.exports = {
    getOtpPage,
    otpVerification
    
}