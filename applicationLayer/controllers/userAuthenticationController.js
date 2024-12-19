const {nameValidation,emailValidation,mobileValidation,countryValidation,usernameValidation,passwordValidation} = require("../services/validationService");
const users = require("../../dataAccessLayer/dataModel/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpgen = require("../services/otpService")
const otpModel = require("../../dataAccessLayer/dataModel/otpModel");
const userModel = require("../../dataAccessLayer/dataModel/userModel");


const registrationPageLoading = (req,res) =>{
   
    res.render("users/signup");
}
const loginPageLoading = (req,res) =>{
    res.render("users/login")
}
const login = async function(req,res){
    try {
       const {email,password} = req.body;
       const result1 = emailValidation(email);
       const result2 = passwordValidation(password);
       if(typeof result1 !== "undefined"){
        res.render("users/login",{serverMessage:result1});
        return
       }
       if(typeof result2 !== "undefined"){
        res.render("users/login",{serverMessage:result2});
        return;
       }
       const customer = await users.findOne({email});
       if(!customer){
        res.render("users/login",{serverMessage:"user doesn't exist!"});
        return
       }
       const result = await bcrypt.compare(password,customer.password);
       if(!result){
        res.render("users/login",{serverMessage:"Incorrect password"});
        return;
       }
       const jwtSecret = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({email},jwtSecret,{expiresIn:"5m"})
            res.cookie("jwt",token,{httpOnly:true,secure:true})
            res.redirect("/");

       
    } catch (error) {
        console.log(error.message);
    }
}
const registration = async function(req,res){
   try {
    const {Name,email,mobile,country,username,password} = req.body;
     let result = nameValidation(Name);
     let result2 = emailValidation(email);
     let result3 = mobileValidation(mobile);
     let result4 = countryValidation(country);
     let result5 = usernameValidation(username)
     let result6 = passwordValidation(password);
     if(typeof result !== "undefined"){
     res.render("users/signup",{serverMessage:result});
     }else if(typeof result2 !== "undefined"){
    res.render("users/signup",{serverMessage:result2});
     }else if(typeof result3 !== "undefined"){
       res.render("users/signup",{serverMessage:result3})
     }else if(typeof result4 !== "undefined"){
      res.render("users/signup",{serverMessage:result4});
     }else if(typeof result5 !== "undefined"){
         res.render("users/signup",{serverMessage:result5});
     }else if(typeof result6 !== "undefined"){
      res.render("users/signup",{serverMessage:result6});
     }else{
       const isUserThere = await users.findOne({email,username})
       if(!isUserThere){
           const secPassword = await bcrypt.hash(password,10);
           const user = new users({
            fullname:Name,
            email,
            mobileNo:mobile,
            country,
            username,
            password:secPassword
            
           })
           
           const savedDocument = await user.save()
           console.log(savedDocument);
           const otp = otpgen(savedDocument.email,savedDocument.fullname);
           if(otp){
            
            const userOtp = new otpModel({
                user_id:savedDocument._id,
                otpNumber:otp,
                createdAt:Date.now()
                
            })
            const savedOtpDocument = await userOtp.save();
            console.log(savedOtpDocument);
            res.redirect("/otp");;
           }

           
           
           
           
          
           
           
       }else{
        res.render("users/signup",{serverMessage:"user found try again with another"});
       }

     }
   
   } catch (error) {
    console.log("registration side:error");
    console.log(error.message);
   }
   

}
module.exports = {
    registrationPageLoading,
    loginPageLoading,
    registration,
    login
}