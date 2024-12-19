const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const router = require("./applicationLayer/routes/userAuthenticationRoutes");
const connectMongodb = require("./dataAccessLayer/dataLayer/userData")
const cookieparser  = require("cookie-parser");
const ownerRouter = require("./applicationLayer/routes/hotelOwnerRoutes")

// setting up view engine and views directory path
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"presentationLayer"));

// configured public file ,parsing to javascript object and form submission through urlencoded
app.use(express.json());
app.use(express.static(path.join(__dirname,"presentationLayer/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
connectMongodb();


app.use("/",router);
app.use("/owner",ownerRouter);








// server 's port 
const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`server is running on port number ${port}`);
})