const express = require("express")
const router = express.Router();

const {loadDetailsPage,fetchData}  = require("../controllers/detailsPage");

router.route("/").get(loadDetailsPage);
router.route("/fetchDetail").get(fetchData)

module.exports = router;