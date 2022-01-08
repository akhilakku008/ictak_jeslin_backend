const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ictakoffial2021:ictakoffial2021@ictak-official-webdb.vtyb5.mongodb.net/ICTofficialproject",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Schema = mongoose.Schema;

const CourseSchema = new Schema({

  courseTitle: String,
  courseType: String, //to be added
  courseImage: String,
  courseAbout: String,  // is same as LongDes
  courseAgenda: String,
  courseFee: String,
  EntranceExamDate: String,
  lastDateReg: String,
  startDate: String,
  Objectives: String,
  courseRegFee: String,
  courseShortName: String,
  courseDuration: String,  

  samplequestion: String,
  placementlist: String,
  samplecertificate: String,
  internshipcertificate: String, 
  shortDesc: String,
  LongDes: String, //ethu vechere kalayanda..v might use it somewhere

 
  

  course_delivery: String, 
  internship_partner: String,  
  knowledge_partner: String, 
  index: Number,  
  active: Boolean,  
});

var Coursedata = mongoose.model("coursedata", CourseSchema);

module.exports = Coursedata;
