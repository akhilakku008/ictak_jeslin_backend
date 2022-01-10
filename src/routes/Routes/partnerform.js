const express = require('express');
const partnerApplicationData = require('../../modals/partnerformData');
let partnerformRouter = express.Router();

partnerformRouter.post('/', async function (req, res) { 
console.log(req.body)
    try{
    let item = {
        name: req.body.members.name,
        email: req.body.members.email,
        phone: req.body.members.phone,
        firm: req.body.members.firm,
        address: req.body.members.address,
        district: req.body.members.district,
        officeSpace: req.body.members.officeSpace,
        report: req.body.members.report,
        expect: req.body.members.expect,
        profile: req.body.members.Dateprofile,
        employeeCount: req.body.members.employeeCount,
        creation_date: new Date(),

    }
    let newPartner = await  partnerApplicationData(item);
    await newPartner.save()
        res.send(true)
    }
    catch {
        res.send(false)
    }
});

module.exports = partnerformRouter;