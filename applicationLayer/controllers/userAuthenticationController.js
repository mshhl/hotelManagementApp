const {nameValidation,emailValidation,mobileValidation,countryValidation,usernameValidation,passwordValidation} = require("../services/validationService");
const users = require("../../dataAccessLayer/dataModel/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registrationPageLoading = (req,res) =>{
   
    res.render("users/signup");
}
const loginPageLoading = (req,res) =>{
    res.render("users/login")
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
           const jwtSecret = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({fullname:Name,country},jwtSecret,{expiresIn:"5m"})
            res.cookie("jwt",token,{httpOnly:true,secure:true})
            res.redirect("/");
           
           
          
           
           
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
    registration
}