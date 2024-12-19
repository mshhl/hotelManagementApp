

const nameInput = document.querySelector(".nameInput");
const errorMessage = document.querySelector(".errorMessage");
const emailInput = document.querySelector(".emailInput");
const mobileInput = document.querySelector(".mobileInput");
const countryInput = document.querySelector(".countryInput");
const usernameInput = document.querySelector(".usernameInput");
const passwordInput = document.querySelector(".passwordInput");
const submitbtn =  document.querySelector(".sbmt-btn");
const form = document.querySelector("form");


nameInput.addEventListener("blur",function(){
    errorMessage.style.display = "none";
    const nameValue = nameInput.value;
     const result = nameValidation(nameValue);
    if(typeof result !== "undefined"){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = result;
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
    
});
emailInput.addEventListener("blur",function(){
    const emailValue = emailInput.value;
    const result2 = emailValidation(emailValue);
    if(typeof result2 !== "undefined"){
        errorMessage.innerHTML = result2;
        errorMessage.style.display = "block";
        
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})
mobileInput.addEventListener("blur",function(){
    const phoneValue = mobileInput.value;
    const result3 = mobileValidation(phoneValue);
    if(typeof result3 !== "undefined"){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = result3;
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})
countryInput.addEventListener("blur",function(){
    const countryValue = countryInput.value;
    const result4 = countryValidation(countryValue);
    if(typeof result4 !== "undefined"){
        errorMessage.innerHTML = result4;
        errorMessage.style.display = "block";
        
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})
usernameInput.addEventListener("blur",function(){
    const usernameValue = usernameInput.value;
    const result5 = usernameValidation(usernameValue);

    if(typeof result5 !== "undefined"){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = result5;
        return;
    }else{
        errorMessage.style.display = "none";
        
    }

})
passwordInput.addEventListener("blur",function(){
    const passwordValue = passwordInput.value;
    const result6 = passwordValidation(passwordValue);

    if(typeof result6 !== "undefined"){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = result6;
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})
submitbtn.addEventListener("click",function(e){
  
  if(typeof nameValidation(nameInput.value) !== "undefined" ||  typeof emailValidation(emailInput.value) !== "undefined"
  || typeof mobileValidation(mobileInput.value) !== "undefined" || typeof countryValidation(countryInput.value)
  !== "undefined" || typeof usernameValidation(usernameInput.value) !== "undefined" || 
  typeof passwordValidation(passwordInput.value) !== "undefined"

){
  e.preventDefault();
  errorMessage.innerHTML = "problem found! check all field";
  errorMessage.style.display = "block";
}else{
  errorMessage.style.display = "none"
  form.submit();
    
}
   
})


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
    const array = email.split("@");
    if(array[1] !== "gmail.com"){
        return "email is not valid";
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


