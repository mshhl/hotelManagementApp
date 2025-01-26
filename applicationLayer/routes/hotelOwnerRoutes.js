const express = require("express");
const router = express.Router();
const {ownerregistrationLoad,loadDashboard,ownerRegistration} = require("../controllers/hotelOwnerControllers");
const multer = require("multer");
const {jwtAfterCheck} = require("../controllers/jwtauth")
const path = require("path");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
console.log("router owner")

var upload = multer({ storage: storage ,fileFilter:function(res,file,cb){
  checkFileType(file,cb);
}})


function checkFileType(file,cb){
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  }else{
    return cb(null,false);
  }
}


router.route("/registerHotel").get(ownerregistrationLoad).post(upload.fields([{"name":"image1",maxCount:1},{"name":"image2",maxCount:1},{"name":"image3",maxCount:1},{"name":"document",maxCount:1}]),ownerRegistration);
router.route("/dashboard").get(loadDashboard)



module.exports = router;