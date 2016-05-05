var personsRouter = require('./persons');
var projectsRouter = require('./projects');
var express = require('express');
var router = express.Router();


router.use('/projects/', projectsRouter);
router.use('/persons/', personsRouter);

module.exports = router;
