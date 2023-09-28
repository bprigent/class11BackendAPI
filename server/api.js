const express = require('express');
const apiRouter = express.Router();

//sub routers
const minionRouter = require('./minions');
const ideaRouter = require('./ideas');
const meetingRouter = require('./meetings');

apiRouter.use('/minions', minionRouter);
apiRouter.use('/ideas', ideaRouter);
apiRouter.use('/meetings', meetingRouter);

//end of file, so export router
module.exports = apiRouter;