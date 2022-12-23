
const {Router} = require("express");
const schema = require("../model/schema");
const jwt = require("jsonwebtoken");
const route = Router()
const config = require("../config/db")

var jwt_secret = config.jwt_secret;

var user = schema.user;
var api = schema.api;

//token generation
const createToken = async(id)=>{
  try {
     
     const token = await jwt.sign({_id:id},jwt_secret);
     return token;

  } catch (error) {
    res.status(400).send(error.message)
  }
}



//signup
route.post("/signup" , async(req,res,next)=>{
  try{

    
    const userCollection = new user({
        username: "chotu",
        password:"nandan",
        createdAt: new Date(),
        updatedAt: new Date(),
     })


     await userCollection.save();

 
     res.send("Signup successfully!") 

    }catch(error) {
        next();
      }

})


//login and credential matching
route.post("/login" , async(req,res,next)=>{
  try{
     const username = "hbtu";
     const password= "nandan";
    
     const userData =  await user.findOne({username:username});

     if(userData){
      
                const passwordMatch = await user.findOne({password:password}) 

                if(passwordMatch){

                      const tokenData = await createToken(userData._id)
                          const userResult = {
                            _id:userData._id,
                            username:userData.username,
                            password:userData.password,
                            token:tokenData
                          }

                          const response ={
                             success:true,
                             msg:"user Details",
                             Data: userResult
                          }

                          res.status(200).send(response);
                }
                else{
                       res.status(200).send({succees:false,msg:"login details are incorrect "})
                }
                
     }
     else{
      res.status(200).send({succees:false,msg:"login details are incorrect "})
     }

    }catch(error) {
        next();
      }

})

route.post("/all-api", async (req,res,next)=>{
  try{
    const result =  await api.find();
    res.send(result)
  }catch(error){
    next();
  }

})




module.exports = route;