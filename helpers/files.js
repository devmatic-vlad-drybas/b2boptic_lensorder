"use strict";

exports.loadValidXml = function(){
    var fs = require('fs');
    var path = require('path');
    var pathToValidXml = path.join(__dirname, "../data/valid.xml");
    return fs.readFileSync(pathToValidXml);   
};

exports.loadInvalidXml = function(){
    var fs = require('fs');
    var path = require('path');
    var pathToValidXml = path.join(__dirname, "../data/invalid.xml");
    return fs.readFileSync(pathToValidXml);   
};

exports.loadSchemaJson = function(){
    var fs = require('fs');
    var path = require('path');
    var pathToSchemaJson = path.join(__dirname, "../data/b2boptic_lensorder_v1.6.3.json");
    return fs.readFileSync(pathToSchemaJson);
};

exports.loadSchema = function(){
    var fs = require('fs');
    var path = require('path');
    var pathToSchemaJson = path.join(__dirname, "../data/b2boptic_lensorder_v1.6.3.xsd");
    return fs.readFileSync(pathToSchemaJson);
};