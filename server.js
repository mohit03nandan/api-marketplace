const express = require('express')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.get('/', (req, res) => {
    res.send("hello world")
})







//connection part
const port = 3000
const host = "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})