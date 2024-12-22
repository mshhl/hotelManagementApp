const {regNumberValidation,addressValidation,hotelNameValidation} = require("../services/hotelValidationService");

const  ownerregistrationLoad = function(req,res){
    res.render("hotelOwner/hotelRegistration");
}

const ownerRegistration = async function(req,res){
    try {
        console.log("hello ownerRegistration");
        const {regnumber,address,hotelname,facilities,bedroom,livingroom,bathroom,diningroom
            ,internet,refrigerator,tv,washingmachine,vacuum,unitofBed
        } = req.body;
        const {image,document} = req.files;
        
          let result = regNumberValidation(regnumber);
          let result2 = addressValidation(address);
          let result3 = hotelNameValidation(hotelname);
        
          if(typeof result !== "undefined"){
            res.render("hotelOwner/hotelRegistration",{serverMessage:result});
          }else if(typeof result2 !== "undefined"){
              res.render("hotelOwner/hotelRegistration",{serverMessage:result2});
          }else if(typeof result3 !== "undefined"){
           res.render("hotelOwner/hotelRegistration",{serverMessage:result3})
           }//else{
        //    const isUserThere = await users.findOne({email,username})
        //    if(!isUserThere){
        //        const secPassword = await bcrypt.hash(password,10);
        //        const user = new users({
        //         fullname:Name,
        //         email,
        //         mobileNo:mobile,
        //         country,
        //         username,
        //         password:secPassword
                
        //        })
               
        //        const savedDocument = await user.save()
        //        console.log(savedDocument);
        //        const otp = otpgen(savedDocument.email,savedDocument.fullname);
        //        if(otp){
                
        //         const userOtp = new otpModel({
        //             user_id:savedDocument._id,
        //             otpNumber:otp,
        //             createdAt:Date.now()
                    
        //         })
        //         const savedOtpDocument = await userOtp.save();
        //         console.log(savedOtpDocument);
        //         res.redirect("/otp");;
        //        }
    
               
               
               
               
              
               
               
        //    }else{
        //     res.render("users/signup",{serverMessage:"user found try again with another"});
        //    }
    
        //  }
       
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