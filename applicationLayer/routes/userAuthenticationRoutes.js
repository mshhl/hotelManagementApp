const express = require("express")
const router = express.Router();
const {registrationPageLoading,loginPageLoading,registration,login,emailVerification} = require("../controllers/userAuthenticationController");
const globalErrorHandler = require("../controllers/globalErrorHandlerController")

const {loadHome} = require("../controllers/homeController");
const {jwtAuth,jwtAfterCheck} = require("../controllers/jwtauth");




router.route("/").get(jwtAuth,loginPageLoading).post(login)
router.route("/registration").get(jwtAuth,registrationPageLoading).post(registration)
router.route("/home").get(jwtAfterCheck,loadHome)
router.route("logout").get()
router.route("/verify/:token/:Name/:email/:mobile/:country/:username/:password").get(emailVerification)
router.use(globalErrorHandler)


module.exports = router;

