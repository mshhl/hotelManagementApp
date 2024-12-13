const jsonwebtoken = require("jsonwebtoken");

function jwtAuth (req,res,next){
    try {
        const token = req.cookies.jwt;
    const decoded = jsonwebtoken.verify(token,process.env.JWT_SECRET_KEY)
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
        const decoded = jsonwebtoken.verify(token,process.env.JWT_SECRET_KEY);
        if(decoded){
            next();
        }
    } catch (error) {
        console.log(error.message);
        res.redirect("/");
    }

}
module.exports =  {
    jwtAuth,
    jwtAfterCheck
}
