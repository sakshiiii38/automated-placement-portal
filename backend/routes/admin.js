const express = require("express")
const res = require("express/lib/response")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("admin home")
})


module.exports = router