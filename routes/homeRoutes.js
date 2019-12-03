const express = require('express');
const path = require('path');
var bodyparser = require('body-parser');

const router = express.Router();

const homeController = require('../controller/homeController');

//console.log(homeController.getHomePage)
router.get('/home', homeController.getHomePage)


exports.routes = router;