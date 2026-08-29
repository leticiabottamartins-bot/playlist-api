const express = require("express");
const connection = require("./database/connection");

const app = express();

app.use(express.json());



app.get("/", (req, res) =>{
    return res.json({msg: "Playlist API is running! :)"})
})
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})