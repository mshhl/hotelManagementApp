
const nodemailer = require("nodemailer");
const otpGeneratorAndSender = function(email){
  
    try {
        const otp = generateOTP();
        console.log(otp);
        const transporter = nodemailer.createTransport({
            secure:true,
            host:"smtp.gmail.com",
            port:465,
            auth:{
                user:process.env.MY_GMAIL,
                pass: process.env.APP_PASSWORD
            }
        })

        function sendMail(to,sub,msg){
            transporter.sendMail({
                to:to,
                subject:sub,
                html:msg
            })
            console.log("email send successfully");
        }
        sendMail(email,"Welcome LankaStay your favourite partner where you will find the hotels for your stay ,your otp is "+otp,"Hey welcome lankaStay your favourate destination please enter your 4 digit one time password for verification ,thankyou Team lankaStay");
    
   
    return otp
    } catch (error) {
        console.log(error.message)
    }
}
function generateOTP() { 
  
    // Declare a digits variable 
    // which stores all digits  
    let digits = '0123456789'; 
    let OTP = ''; 
    let len = digits.length 
    for (let i = 0; i < 4; i++) { 
        OTP += digits[Math.floor(Math.random() * len)]; 
    } 
     
    return OTP; 
} 

module.exports = otpGeneratorAndSender;