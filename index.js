"use strict";

exports.b2bOptic = function() {    
    var files = require('./helpers/files');
    return JSON.parse(files.loadSchemaJson());
};

exports.validate = function(xmlValue) {    
    var files = require('./helpers/files');
    var b2boptic_lensorder_v1_6_3_schema = files.loadSchema();

    var libxmljs = require('libxmljs');
    var xsdDoc = libxmljs.parseXmlString(b2boptic_lensorder_v1_6_3_schema);    
    var xmlDoc = libxmljs.parseXmlString(xmlValue);    
    return xmlDoc.validate(xsdDoc);    
};

exports.deserialize = function(xml) {
    var xml2js = require('xml2js');
    var parseString = xml2js.parseString;    
    var xmlValid = this.validate(xml);
    var jsonObject = null;
    if(xmlValid) {
        parseString(xml, function(err,result){
            if(err) {
                throw err;
            }
            jsonObject = result;
        });
        return jsonObject;
    } else {
        throw Error("Xml not valid as per schema.");
    }
};

exports.serialize = function(b2bOpticObject) {    
    var xml2js = require('xml2js');
    var builder = new xml2js.Builder();
    var b2bOpticXml = builder.buildObject(b2bOpticObject);
    var xmlValid = this.validate(b2bOpticXml);
    if(xmlValid)
    {
        return b2bOpticXml;
    }
    else
    {
        return "Invalid b2bOptic object";
    }
};
