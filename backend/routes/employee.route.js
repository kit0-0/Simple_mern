const express = require('express'),
    router = express.Router(),
    controller = require('../controller/employee.controller');


router.post('/', controller.createUser)






module.exports = router;