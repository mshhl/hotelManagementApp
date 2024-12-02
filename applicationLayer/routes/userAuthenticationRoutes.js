const express = require("express")
const router = express.Router();
const {registrationPageLoading} = require("../controllers/userAuthenticationController");



console.log("hey")
router.route("/").get(registrationPageLoading);

module.exports = router;

