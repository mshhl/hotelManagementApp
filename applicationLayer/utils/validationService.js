function nameValidation(name){
    if(name.trim() === ""){
        return "Name should not be empty";
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return "Name should only contain letters and spaces";
    }
    if(name.length < 2 || name.length > 50){
        return "letters shold containe between 2 and 50";
    }
    return;
}
function emailValidation(email){
    if(email.trim() == ""){
        return "Email should not be empty";
    }
    if(email.trim() == " "){
        return "Email should not contain space";
    }
    
    if(!checkEmailValid(email)){
       return "Email is not valid";
    }

    return;
    function checkEmailValid(eml){
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
        return regex.test(eml)
    }    
}
function mobileValidation(phoneNum){
    let mob_regex = /^[6-9]\d{9}$/

    if(phoneNum.trim() == ""){
        return "phone number should not be empty"
    }
   if(phoneNum.length < 10){
    return "Phone number should not contain less than 12"
   }
   if(!mob_regex.test(phoneNum)){
      return "Phone number is not valid"
   }
}
function countryValidation(countryName){
   
    if(countryName.trim() == ""){
        return "country name should not be empty";
    }
    
}
function usernameValidation(username){
    const usernameRegex = /^[a-z0-9_.]+$/
    if(username.trim() == ""){
        return "username should not be empty";
    }
    if(!usernameRegex.test(username)){
        return "username is not valid";
    }
}
function passwordValidation(password){
    const pswrdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(password.trim() == ""){
        return "password should not be empty";
    }
    if(!pswrdRegex.test(password)){
        return "password is not valid";
    }
}
module.exports = {
    nameValidation,
    emailValidation,
    mobileValidation,
    countryValidation,
    usernameValidation,
    passwordValidation
}
