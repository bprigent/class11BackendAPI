const express = require('express');
const minionRouter = express.Router();
const morgan = require('morgan');
const db = require('./db');
const getAllFromDatabase = db.getAllFromDatabase;
const addToDatabase = db.addToDatabase;

//set up proper logging
minionRouter.use(morgan('tiny'));

//get the param minionId


// GET - /api/minions to get an array of all minions.
minionRouter.get('/',(req, res, next) => {
    const data = getAllFromDatabase('minions');
    res.send(data);
});

// POST - /api/minions to create a new minion and save it to the database.
minionRouter.post('/',(req, res, next) => {
    const data = req.body;
    addToDatabase('minions', data)
    res.send(data);
});


// GET - /api/minions/:minionId to get a single minion by id.
minionRouter.get('/:minionId',(req, res, next) => {
    const minionId = req.params.minionId;
    const data = db.getFromDatabaseById('minions', minionId)
    res.send(data);
});


// PUT - /api/minions/:minionId to update a single minion by id.

// DELETE - /api/minions/:minionId to delete a single minion by id.



//end of file, so export router
module.exports = minionRouter;