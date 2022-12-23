const jwt = require("jsonwebtoken");
const config = require("../config/db");

var jwt_secret = config.jwt_secret;

const verifyToken  = async(req,res,next) =>{

  const token = req.body.token || req.query.token || req.headers["authorization"];
   
  if(!token){
    res.status(200).send({success: false,msg: "a token is required to authentication"})
  }
   try {
         
      const decode =  jwt.verify(token,jwt_secret);
      req.user = decode;
   } catch (error) {
       res.status(400).send("invalid token");
   }  
   return next();  

}

module.exports = verifyToken;