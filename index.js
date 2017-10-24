"use strict";

exports.b2bOptic = function() {    
    var fse = require('fs-extra');
    var path = require('path');
    var pathToSchemaJson = path.join(__dirname, "b2boptic_lensorder_v1.6.3.json");
    var b2boptic_lensorder_v1_6_3_json = fse.readFileSync(pathToSchemaJson);
    return JSON.parse(b2boptic_lensorder_v1_6_3_json);
};

exports.validate = function(xmlValue) {    
    var fse = require('fs-extra');
    var path = require('path');
    var pathToSchema = path.join(__dirname, "b2boptic_lensorder_v1.6.3.xsd");
    var b2boptic_lensorder_v1_6_3_schema = fse.readFileSync(pathToSchema);    
    
    var libxmljs = require('libxmljs');
    var xsdDoc = libxmljs.parseXmlString(b2boptic_lensorder_v1_6_3_schema);    
    var xmlDoc = libxmljs.parseXmlString(xmlValue);    
    return xmlDoc.validate(xsdDoc);
    /*
    var xmllintObject = require('xmllint');
    try {
        var validationOutput = xmllintObject.validateXML({ xml: xmlValue, schema: b2boptic_lensorder_v1_6_3_schema});
        if (!validationOutput.errors) {
            return true;
        } else {
            return false;
        }        
    } catch (error) {
        return false;
    } 
    */   
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
