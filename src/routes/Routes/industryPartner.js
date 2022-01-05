const express = require('express');
const industrypartnerData = require('../../modals/industrypartnerData');
let industrypartnerRouter = express.Router();

industrypartnerRouter.get('/', async function (req, res) {
    
   
         industrypartnerData.find()
        .then(function (industrypartners) {
            console.log(industrypartners+"industry");
            res.send(industrypartners);
        })
  
});

module.exports = industrypartnerRouter;