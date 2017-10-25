"use strict";

exports.loadValidXml = function(callback){
    var fs = require('fs');
    var path = require('path');
    var pathToValidXml = path.join(__dirname, "../data/valid.xml");
    fs.readFile(pathToValidXml, function(err, data){
        if(err){
            throw callback(err);
        } else {
            return callback(null, data);
        }        
    });
};

exports.loadInvalidXml = function(callback){
    var fs = require('fs');
    var path = require('path');
    var pathToValidXml = path.join(__dirname, "../data/invalid.xml");
    fs.readFile(pathToValidXml, function(err, data){
        if(err){
            throw callback(err);
        } else {
            return callback(null, data);
        }        
    });
};

exports.loadSchemaJson = function(callback){
    var fs = require('fs');
    var path = require('path');
    var pathToSchemaJson = path.join(__dirname, "../data/b2boptic_lensorder_v1.6.3.json");
    fs.readFile(pathToSchemaJson, function(err, data){
        if(err){
            throw callback(err);
        } else {
            return callback(null, data);
        }        
    });
};

exports.loadSchema = function(callback){
    var fs = require('fs');
    var path = require('path');
    var pathToSchemaJson = path.join(__dirname, "../data/b2boptic_lensorder_v1.6.3.xsd");
    fs.readFile(pathToSchemaJson, function(err, data){
        if(err){
            throw callback(err);
        } else {
            return callback(null, data);
        }        
    });
};