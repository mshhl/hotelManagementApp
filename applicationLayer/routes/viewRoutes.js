const express = require("express");
const router = express.Router();

const {loadHome,searchFunctionality,paginationHandler,defautlQuery} = require("../controllers/homeController");
const {jwtAfterCheck} = require("../controllers/jwtauth");

router.route("/").get(jwtAfterCheck,loadHome);
router.route("/suggest").get(paginationHandler,searchFunctionality);
router.route("/defaultquery").get(paginationHandler,defautlQuery)

module.exports = router;