const e = require('express');
const express = require('express');
const router = express.Router();

var { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if(!err){
            res.send(doc);
        }else {
            console.log(('Error in Employee Save: ' + JSON.stringify(err, undefind, 2)));
        }
    });
});

module.exports = router; 