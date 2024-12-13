const mongoose = require("mongoose");
const mongoConnectStr = process.env.MONGO_CONNECTION_STRING; 
function connectMongodb(){
    const connect = mongoose.connect(mongoConnectStr);
connect.then(() =>{
    console.log("Mongo db successfully connected")
}).catch((error) =>{
    console.error("connection error",error);
})
}
module.exports = connectMongodb;

