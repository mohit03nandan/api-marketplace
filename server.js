
const express = require('express')
const config = require("./config/db")
const Errorhandler = require("./middlewares/errorhandler")
const app = express();
const public = require("./routes/public")
const private = require("./routes/private")
const authorization = require("./middlewares/auth");

var connect = config.connect
connect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/public", public );
app.use("/private",authorization,private)



// function verifyToken(req,res,next){
//   const bearerHeader = req.headers['authorization'];
//   if(typeof bearerHeader !== 'undefined'){
//          const bearer = bearerHeader.split(" ");
//          const token = bearer[1];
//          req.token = token;
//          next();
//   }else{
//     res.send({
//         result: 'token is not valid'
//     })
//   }
// }

app.use(Errorhandler);




app.get("/api/health" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})

app.get('/', (req, res) => {
    res.send("hello world")
})


// error handling
app.use(function (req, res, next) {
    res.status(404).send("Something went wrong! Please try after some time.");
  })

//connection part
const port = process.env.PORT 
const host = process.env.HOST  
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})