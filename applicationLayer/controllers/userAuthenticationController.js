

const registrationPageLoading = (req,res) =>{
   
    res.render("users/signup");
}
const loginPageLoading = (req,res) =>{
    res.render("users/login")
}
module.exports = {
    registrationPageLoading,
    loginPageLoading
}