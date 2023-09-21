const express = require('express');
const { testController } = require('../../controllers/testControllers');

const testRoute = express.Router();
//JS HOF
 


//object.get(routesname,middleware1....,handlerFunction)
testRoute.get('/orders',testController)

exports.testRoute = testRoute;