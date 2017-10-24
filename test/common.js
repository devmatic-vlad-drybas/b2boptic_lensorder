"use strict";

exports.loadValidXml = function(){
    var fse = require('fs-extra');
    var path = require('path');
    var pathToValidXml = path.join(__dirname, "/valid.xml");
    return fse.readFileSync(pathToValidXml);   
}

exports.loadInvalidXml = function(){
    var fse = require('fs-extra');
    var path = require('path');
    var pathToValidXml = path.join(__dirname, "/invalid.xml");
    return fse.readFileSync(pathToValidXml);   
}