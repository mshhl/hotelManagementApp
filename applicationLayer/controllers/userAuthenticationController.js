const {nameValidation,emailValidation,mobileValidation,countryValidation,usernameValidation,passwordValidation} = require("../services/validationService");
const users = require("../../dataAccessLayer/dataModel/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {jwtTokenGen} = require("./jwtauth");

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
            res.cookie("jwt",token,{httpOnly:true,secure:true});
            if(customer.roll == 1){
                res.redirect("owner/dashboard");
                return
            }
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
        //    const user = new users({
        //     fullname:Name,
        //     email,
        //     mobileNo:mobile,
        //     country,
        //     username,
        //     password:secPassword
            
        //    })
           const token = jwtTokenGen(email);
           const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.MY_GMAIL,
                pass:process.env.APP_PASSWORD
            }
           })
           const splitname = Name.split(" ");
           if(splitname.length > 1){
            for(let i = 0;i<splitname.length - 1;i++){
                const firstName = splitname[i];
                const mfirstName = firstName + ",";
                splitname[i] = mfirstName;
                
            }
           
           }
           let joinName ;
           if(splitname.length > 1){  
            joinName =  splitname.join("");
           console.log(joinName) 
         }
           
          
           const mailConfiguration = {
            from:process.env.MY_GMAIL,
            to:email,
            subject:"Email verification",
            text:`Hi! There,welcome LankaStay, You have recently visited 
           our website and entered your email.
           Please follow the given link to verify your email
           http://localhost:3000/verify/${token}/${joinName}/${email}/${mobile}/${country}/${username}/${secPassword}
           Thanks`
           // const {Name,email,mobile,country,username,password} = req.body;
           }
           transporter.sendMail(mailConfiguration,function(err,info){
            if(err) throw Error(err)
                console.log("email sent successfully");
                
                console.log(info);
                res.render("users/signup",{emailMessage:`A link sent to ${email}`})
           })
           
           

           
           
           
           
          
           
           
       }else{
        res.render("users/signup",{serverMessage:"user found try again with another"});
       }

     }
   
   } catch (error) {
    console.log("registration side:error");
    console.log(error.message);
   }
   

}

const emailVerification = async function(req,res){
    console.log("helo email veru");
  try {
    console.log("hey emailVerification")
    const {token,Name,email,mobile,country,username,password} = req.params;
    console.log(Name,password);


    if(token){
        const secretKey = process.env.JWT_SECRET_KEY;
        jwt.verify(token,secretKey,async function(err,decoded){
            if(err){
                console.log(err.message)
                res.send("email verification failed");
            }else{
                const nName = Name.split(",");
                const newJoinName = nName.join(" ");
                const user = new userModel({
                   fullname:newJoinName,
                   email,
                   mobileNo:mobile,
                   country,
                   username,
                   password
                })
                const savedDocument = await  user.save();
                if(savedDocument){
                    res.cookie("jwt",token,{httpOnly:true,secure:true});
                    res.redirect("/home");
                }
                 
                
            }

        })
    }
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = {
    registrationPageLoading,
    loginPageLoading,
    registration,
    login,
    emailVerification
}