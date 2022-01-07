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
  courseImage: String,
  courseAbout: String,
  courseOverview: String,
  courseAgenda: String,
  courseTraining: String,
  courseFee: String,
  EntranceExamDate: String,
  lastDateReg: String,
  startDate: String,
  Objectives: String,
  courseRegFee: String,
  courseDuration: String,  //tel aneesha

  samplequestion: String,
  placementlist: String,
  samplecertificate: String,
  internshipcertificate: String,
  shortDesc: String,
  LongDes: String,
  Reg_Status: Number,
 
  Rating: Number,
  dates: String,
  aptitude_test: String,
  eligibility: String,
  course_Agenda: String,
  course_fee: String,
  course_delivery: String,
  internship_partner: String,
  knowledge_partner: String,
  index: Number,
  active: Boolean,
});

var Coursedata = mongoose.model("coursedata", CourseSchema);

module.exports = Coursedata;
