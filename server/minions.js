const express = require('express');
const minionRouter = express.Router();
const morgan = require('morgan');

//set up proper logging
minionRouter.use(morgan('tiny'));

//get the param minionId

// GET - /api/minions to get an array of all minions.
minionRouter.get('/',(req, res, next) => {
    console.log("this is the minionRouter - Get - /api/minions");
    res.send('hello')
});

// POST - /api/minions to create a new minion and save it to the database.

// GET - /api/minions/:minionId to get a single minion by id.

// PUT - /api/minions/:minionId to update a single minion by id.

// DELETE - /api/minions/:minionId to delete a single minion by id.



//end of file, so export router
module.exports = minionRouter;