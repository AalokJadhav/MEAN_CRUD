const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

// Destructuring  Syntax
var { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {

    if (!ObjectId.isValid(req.params._id))
        return res.status(400).send(`No Record with given Id: ${req.params._id}`);

    Employee.findById(req.params._id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
        }

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
        if (!err) {
            res.send(doc);
        } else {
            console.log(('Error in Employee Save: ' + JSON.stringify(err, undefind, 2)));
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params._id))
        return res.status(400).send(`No record with given id : ${req.params._id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params._id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params._id))
        return res.status(400).send(`No record with given id : ${req.params._id}`);

    Employee.findByIdAndRemove(req.params._id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router; 