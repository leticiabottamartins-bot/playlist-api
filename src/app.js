const express = require("express");
const pool = require("./database/db");

const app = express();

app.use(express.json());
//app.use("/usuarios", require("./routes/usuario"));

app.get("/", (req, res) => {
    return res.json({
        msg: "Playlist API is running! :)"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});