const express = require("express");
const router = express.Router();
const {ownerregistrationLoad,loadDashboard,ownerRegistration} = require("../controllers/hotelOwnerControllers");
const multer = require("multer");
const {jwtAfterCheck} = require("../controllers/jwtauth")

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })


router.route("/registerHotel").get(ownerregistrationLoad).post(upload.fields([{name:"image",maxCount:1},{name:"document",maxCount:1}]),ownerRegistration);
router.route("/dashboard").get(loadDashboard)


module.exports = router;