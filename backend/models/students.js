const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose') ; 

mongoose.connect('mongodb://localhost/placement',{
    useunifiedTopology : true ,
    useNewUrlParser : true 
})

var db = mongoose.connection ; 

db.on('error', console.error.bind(console , 'connection error: ')) ; 

db.once('open', function(){
    console.log("we are connected bro/sis") ; 
})


var studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    cgpa: Decimal128,
    Marks10th: Decimal128,
    Marks12th: Decimal128,
    gender: String,
    Phone: Number,
    Branch: String,
}) ; 

var student = mongoose.model('student',studentSchema) ; 


