"use strict";

exports.b2bOptic = function(callback) {    
    var files = require('./helpers/files');
    files.loadSchemaJson(function(err, data){
        if(err){
            throw callback(err);
        }
        return callback(null, JSON.parse(data));
    });
    
};

exports.validate = function(xmlValue, callback) {    
    var files = require('./helpers/files');
    files.loadSchema(function(err, data){
        if(err){
            throw callback(err);
        } 
        var libxmljs = require('libxmljs');
        var xsdDoc = libxmljs.parseXmlString(data);    
        var xmlDoc = libxmljs.parseXmlString(xmlValue);    
        return callback(null, xmlDoc.validate(xsdDoc));    
    });
};

exports.deserialize = function(xml, callback) {
    var xml2js = require('xml2js');
    var parseString = xml2js.parseString;    
    this.validate(xml, function(err, data){
        if(err) {
            throw callback(err);
        }
        var xmlValid = data;
        var jsonObject = null;
        if(xmlValid) {
            parseString(xml, function(err,result){
                if(err) {
                    throw callback(err);
                }
                jsonObject = result;
            });
            return callback(null, jsonObject);
        } else {
            throw callback(Error("Xml not valid as per schema."));
        }
    });    
};

exports.serialize = function(b2bOpticObject, callback) {    
    var xml2js = require('xml2js');
    var builder = new xml2js.Builder();
    var b2bOpticXml = builder.buildObject(b2bOpticObject);
    this.validate(b2bOpticXml, function(err, data){
        if(err){
            callback(err);
        }
        var xmlValid = data;
        if(xmlValid)
        {
            return callback(null, b2bOpticXml);
        }
        else
        {
            return callback("Invalid b2bOptic object");
        }
    });
    
};
