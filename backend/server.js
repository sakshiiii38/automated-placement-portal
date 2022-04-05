const express = require('express')
const req = require('express/lib/request')
const app = express()

const studentsRouter = require("./routes/students")
const companyRouter = require("./routes/company")
const crcRouter = require("./routes/crc")
const adminRouter = require("./routes/admin")
app.use('/students',studentsRouter)
app.use('/company',companyRouter)
app.use('/crc',crcRouter)
app.use('/admin',adminRouter)


app.get('/', (req,res)=>{
    res.send("index")
})


app.listen(3000)