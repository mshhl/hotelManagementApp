const fast2sms = require('fast-two-sms')


const otpGeneratorAndSender = function(phone){
  
    const otp = generateOTP();
    var options = {authorization : process.env.API_SMS , message : 'welcome lanka stay ,your otp is  '+otp ,  numbers : [phone]}; 
    fast2sms.sendMessage(options) 
    return;
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