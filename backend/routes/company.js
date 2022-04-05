const express = require("express")
const res = require("express/lib/response")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("company home")
})

router.get("/register",(req,res)=>{
    res.send("company registration")
})


module.exports = router