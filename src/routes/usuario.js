const express = require("express");
const router = express.Router();
const db = require("../database/db");


router.get("/", async (req, res) =>{
   try{
        const r = await db.query("SELECT * FROM usuario")
        if (!r.rowCount){
            throw new Error("Erro: USuários não encontrados :/")
        } 
        return res.status(200).json(r.rows);

   }catch(error){
        return res.status(404).json(error)
   }
});


module.exports = router;