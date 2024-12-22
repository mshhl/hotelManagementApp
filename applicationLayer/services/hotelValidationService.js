const regNumberValidation = function(regno){
    const regex = /^HR\/[A-Z]{3}\/[0-9]{4}-[0-9]{3}$/;
     const result = regex.test(regno)
     if(!result){
        return "Registration number is not valid";
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

module.exports = {
    regNumberValidation,
    addressValidation,
    hotelNameValidation
}