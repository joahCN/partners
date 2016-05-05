var express = require('express');
var router = express.Router();

var datas = require("../config").datas;

router.get('/', (req, res) =>{
    res.json({profiles: datas.profiles});
});

module.exports = router;
