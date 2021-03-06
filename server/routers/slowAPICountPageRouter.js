'use strict';

/* Project Modules */
var ROUTE       = require('../utils/yamlResources').get('ROUTE');
var routeLoader = require('../utils/routeLoader');

var slowAPICountPageCtrl = require('../controllers/slowAPICountPageCtrl');

routeLoader.load(ROUTE.slowAPICountPage.list, [
  slowAPICountPageCtrl.list,
]);
