const express = require("express")
const router = express.Router()

//getting students details
router.get("/:id",(req,res)=>{ 
    res.send(req.params.id)
})
//for going to register page
router.get("/register",(req,res)=>{
    res.send("students registration get")
})
//for saving student's data while registering
router.post("/register",(req,res)=>{
    res.send("students registration post")
})

//for getting job profile
router.post("/jobprofile",(req,res)=>{
    res.send("Job profile")
})

//for getting interview
router.post("/interview",(req,res)=>{
    res.send("interview")
})




module.exports = router