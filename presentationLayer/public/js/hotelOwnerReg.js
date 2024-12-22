const errorMessage = document.querySelector(".errorMessage");
const regInput = document.querySelector(".regInput");
const addrsInput = document.querySelector(".addrsInput");
const hotelName = document.querySelector(".usernameInput");
const submitBtn = document.querySelector(".sbmt-btn");
const form = document.querySelector("form");


regInput.addEventListener("blur",function(){
    console.log("entered regInput")
    errorMessage.style.display = "none";
    const regValue = regInput.value;
     const result = regNumberValidation(regValue);
    if(typeof result !== "undefined"){
        errorMessage.innerHTML = result;
        errorMessage.style.display = "block";
        
       
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
submitBtn.addEventListener("click",function(e){
    const regValue = regInput.value;
    const addrsValue = addrsInput.value;
    const hotelNameValue = hotelName.value;
    
    errorMessage.style.display = "none";
    const res1 = regNumberValidation(regValue);
    const res2 = addressValidation(addrsValue);
    const res3 = hotelNameValidation(hotelNameValue);

    if(typeof res1 !== "undefined" || typeof res2 !=="undefined"
     || typeof res3 !== "undefined" 
  ){
    
    e.preventDefault();
    errorMessage.innerHTML = "problem found! check all field";
    errorMessage.style.display = "block";
    return;
  }
  form.submit();
  
  
})



const regNumberValidation = function(regno){
    const regex = /^HR\/[A-Z]{3}\/[0-9]{4}-[0-9]{3}$/;
     const result = regex.test(regno);
     if(!result){
        return "registration number  is not valid";
     }
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


