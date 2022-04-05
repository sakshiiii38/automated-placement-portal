require('dotenv').config()
const express = require('express')
const req = require('express/lib/request')
const app = express()

const studentsRouter = require("./routes/students")
const companyRouter = require("./routes/company")
const crcRouter = require("./routes/crc")
const adminRouter = require("./routes/admin")
const { default: mongoose } = require('mongoose')
app.use('/students',studentsRouter)
app.use('/company',companyRouter)
app.use('/crc',crcRouter)
app.use('/admin',adminRouter)

mongoose.connect(process.env.db_url)
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.on('open',()=>console.log('CONNECTED TO DB'))

app.use(express.json())


app.get('/', (req,res)=>{
    res.send("index")
})


app.listen(3000)