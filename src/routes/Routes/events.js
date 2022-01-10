const express = require('express');
const eventsData = require('../../modals/eventsData');
let eventsRouter = express.Router();


//get events
eventsRouter.get('/', async function (req, res) {
    
   
         eventsData.find()
        .then(function (events) {
           
            res.send(events);
        })
  
});


//single event
eventsRouter.get('/:id', async function (req, res) {
    
   
    eventsData.findById(req.params.id)
   .then(function (events) {
    
       res.send(events);
   })

});

module.exports = eventsRouter;