const mongoose = require("mongoose")
const dotenv = require('dotenv');

//configuration mongodb with localserver
function connect(){
    
    dotenv.config();

    const mongoUrl = process.env.MONGODB_URI;
    
    mongoose.set('strictQuery', false);
    
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((err) => {
            console.log("Database Not Connected Successfully : " + err);
        });
    
}

const jwt_secret = {
    jwt_secret:"thisismysecretkeyofjwttokenwhichisusedtoconfiguration"
}

 
var config = {
    "connect": connect,
    "jwt_secret": jwt_secret.jwt_secret,
 };

module.exports = config;