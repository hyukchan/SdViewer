var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/:id', function(req, res, next) {
    var content = fs.readFileSync("mocks/dossier.json");
    var jsonContent = JSON.parse(content);
    res.send(jsonContent);
});

router.get('/', function(req, res, next) {
    var content = fs.readFileSync("mocks/dossiers.json");
    var jsonContent = JSON.parse(content);
    res.send(jsonContent);
});

module.exports = router;
