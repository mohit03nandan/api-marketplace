
const express = require('express')
const connect = require("./config/db")

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/api/health" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})

app.get('/', (req, res) => {
    res.send("hello world")
})



//connection part
const port = process.env.PORT 
const host = process.env.HOST  
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})