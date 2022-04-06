const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose') ; 

mongoose.connect('mongodb://localhost:27017/placement',{
    useunifiedTopology : true ,
    useNewUrlParser : true 
}) ; 

var db = mongoose.connection ; 

db.on('error', console.error.bind(console , 'connection error: ')) ; 

db.once('open', function(){
    console.log("we are connected bro/sis") ; 
}) ; 


var studentSchema = new mongoose.Schema({
    id: {type:Number,required:true,} ,
    name: String,
    cgpa: Decimal128,
    Marks10th: Decimal128,
    Marks12th: Decimal128,
    gender: String,
    Phone: Number,
    Branch: String,
}) ; 

var student = mongoose.model('student',studentSchema) ; 

var companySchema = new mongoose.Schema({
    id:{type:Number , required:"True"} ,
    name: String,
    website:String,
    address: String,
    companyType: String,
    contact : Number ,
    email : String , 
    HrContact : Number ,
    HrName : String ,
    jobType : String,
    designation: String,
    minCgpa : Decimal128 ,
    Min10th : Decimal128 ,
    Min12th : Decimal128 ,
    Ctc : Decimal128 ,
    Gross : Decimal128,
    onlineTest : String,
    interview : String,
    EligibleDepartment : String,
    tier : [0 , 1, 2 , 3]
});

var company =  mongoose.model("company",companySchema) ; 


var csSchema = new mongoose.Schema({
    students : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    },

    companies:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "company"
    },
    status : ["applied","selected","rejected"] 
}) ;

var csRelation = mongoose.model("csRelation",csSchema) ; 

module.exports = {
    student,
    company,
    csRelation
}


