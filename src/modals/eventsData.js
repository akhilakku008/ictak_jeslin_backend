const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ictakoffial2021:ictakoffial2021@ictak-official-webdb.vtyb5.mongodb.net/ICTofficialproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const eventsSchema = new Schema({

    regstatus: { type: Number, default: 1 },
    eventname: String,
    eventtype: String,
    eventabout: String,
    eventagenda: String,
    eventoverview: String,
    eventobjective:String,
    eventtraining: String,
    eventfees: String,
    startdate: String,       
    enddate: String,
    image:String,

  creation_date:Date
});

var eventsData = mongoose.model('events', eventsSchema);

module.exports = eventsData;