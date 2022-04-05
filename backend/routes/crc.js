const express = require("express")
const res = require("express/lib/response")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("crc home")
})

router.get("/register",(req,res)=>{
    res.send("crc registration")
})


module.exports = router