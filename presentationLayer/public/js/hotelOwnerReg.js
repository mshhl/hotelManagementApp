const errorMessage = document.querySelector(".errorMessage");
const regInput = document.querySelector(".regInput");
const addrsInput = document.querySelector(".addrsInput");
const hotelName = document.querySelector(".usernameInput");

regInput.addEventListener("blur",function(){
    console.log("entered regInput")
    errorMessage.style.display = "none";
    const regValue = regInput.value;
     const result = regNumberValidation(regValue);
    if(result == true){
        errorMessage.innerHTML = result;
        errorMessage.style.display = "block";
        
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})
addrsInput.addEventListener("blur",function(){
    errorMessage.style.display = "none";
    const addrsValue = addrsInput.value;
     const result = addressValidation(addrsValue);
    if(typeof result !== "undefined"){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = result;
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})

hotelName.addEventListener("blur",function(){
    errorMessage.style.display = "none";
    const hotelNameValue = hotelName.value;
     const result = hotelName(hotelNameValue);
    if(typeof result !== "undefined"){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = result;
        return;
    }else{
        errorMessage.style.display = "none";
        
    }
})


const regNumberValidation = function(regno){
    const regex = /^KL\/[A-Z]{3}\/[0-9]{4}-[0-9]{3}$/;
    return regex.test(regno)
}

const addressValidation = function(address){
    if(address.trim() == ""){
        return "address should not be empty";
    }
}

const hotelNameValidation = function(name){
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


