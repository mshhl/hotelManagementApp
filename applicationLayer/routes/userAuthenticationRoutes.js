const express = require("express")
const router = express.Router();
const {registrationPageLoading,loginPageLoading,registration,login,emailVerification} = require("../controllers/userAuthenticationController");
const {loadDetailsPage}  = require("../controllers/detailsPage");

const {loadHome,searchFunctionality,paginationHandler,defautlQuery} = require("../controllers/homeController");
const {jwtAuth,jwtAfterCheck} = require("../controllers/jwtauth");



console.log("userAuthenticationRouter");

router.route("/").get(jwtAuth,loginPageLoading).post(login)
router.route("/registration").get(jwtAuth,registrationPageLoading).post(registration)
router.route("/logout")
router.route("/verify/:token/:Name/:email/:mobile/:country/:username/:password").get(emailVerification)

router.route("/home").get(jwtAfterCheck,loadHome);
router.route("/suggest").get(paginationHandler,searchFunctionality);
router.route("/defaultquery").get(paginationHandler,defautlQuery)



router.route("/details").get(loadDetailsPage);







module.exports = router;

