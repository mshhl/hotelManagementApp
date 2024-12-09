const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const errorMessage = document.querySelector(".errorMessage");
const form = document.querySelector("form");
const submitButton = document.querySelector(".sbmt-btn");

emailInput.addEventListener("blur",function(){
    const emailValue = emailInput.value
    const resultEmail = emailValidation(emailValue);
    if(typeof resultEmail !== "undefined"){
       errorMessage.innerHTML = resultEmail;
       errorMessage.style.display = "block";
       return
    }else{
        errorMessage.style.display = "none";
    }

})
passwordInput.addEventListener("blur",function(){
    const passwordValue = passwordInput.value;
    const resultPassword = passwordValidation(passwordValue);
    if(typeof resultPassword !== "undefined"){
        errorMessage.innerHTML = resultPassword;
        errorMessage.style.display = "block";
        return;
    }else{
        errorMessage.style.display = "none";
    }
})
submitButton.addEventListener("click",function(e){
    if(typeof emailValidation(emailInput.value) !== "undefined" || typeof passwordValidation(passwordInput.value) !== "undefined"
    ){
        e.preventDefault();
        errorMessage.innerHTML = "problem found! pls check all field"
        errorMessage.style.display = "block";
        return;
    }else{
        errorMessage.style.display = "none";
        form.submit();
    }

})







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

function passwordValidation(password){
    const pswrdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(password.trim() == ""){
        return "password should not be empty";
    }
    if(!pswrdRegex.test(password)){
        return "password is not valid";
    }
    return;
}
