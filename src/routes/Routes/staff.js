const express = require('express');
const StaffData = require('../../modals/staffData');
let app = express.Router();

// team
app.get('/team', async function (req, res) {
    await StaffData.find({"role":false})
        .then(function (staff) {
            console.log(staff);
            res.send(staff);
        })
});

// leaders
app.get('/leaders', async function (req, res) {
    await StaffData.find({"role":true})
        .then(function (staff) {
            console.log(staff);
            res.send(staff);
        })
});

module.exports = app;