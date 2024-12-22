const jwt = require("jsonwebtoken");
const userModel = require("../../dataAccessLayer/dataModel/userModel")


function jwtAuth (req,res,next){
    try {
        const token = req.cookies.jwt;
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(decoded){
        res.redirect("/home");
        
    }   
    } catch (error) {
        console.log(error.message);
        next();
    }
    
}
const jwtAfterCheck = function(req,res,next){
    try {
        const token = req.cookies.jwt;

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(decoded){
            next();
        }
    } catch (error) {
        console.log(error.message);
        res.redirect("/");
    }

}
const jwtTokenGen = function(useremail){
    const jwtSecret = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({useremail},jwtSecret,{expiresIn:"5m"})
    if(token){
        return token
    }
}
// const userStillCheck =  async function(req,res,next){
//     try {
//         const {email} = req.body;
//        const user = await userModel.findOne({email});
//        if(!user){
//         res.clearCookie("jwt");
//         res.redirect("/")
//         return;
//        }
//        next();

//     } catch (error) {
//         console.log(error.message)
//     }
// }
module.exports =  {
    jwtAuth,
    jwtAfterCheck,
    jwtTokenGen
    
}
