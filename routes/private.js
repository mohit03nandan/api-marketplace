const {Router} = require("express");
const schema = require("../model/schema");
const route = Router()


var api = schema.api;

route.post("/add-new-api" , async(req,res,next)=>{
    try{
     
        // const apiName = req.body.name;
        // const apiDescription = req.body.description;
        // const apiEndPoint = req.body.EndPoint;
        // const imageurl = req.body.imageLink;
      
      const apiCollection = new api({

          apiName: "newApi",
          description:"added new api",
          imageurl:"www.google.com",
          apilink:"nandan",
          createdAt: new Date(),
          updatedAt: new Date(),
       })
  
       await apiCollection.save();
  
   
       res.send("add new api successfully!") 
  
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