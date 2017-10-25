"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

var xmlValid = files.loadValidXml();
var parseString = require('xml2js').parseString;
var jsonValidObject = null;
parseString(xmlValid, function(err,result){
  if(err) {
      throw err;
  }
  jsonValidObject = result;
});

var xmlTestString = b2boptic_lensorder.serialize(jsonValidObject);
var jsonTestObject = null;
parseString(xmlTestString, function(err,result){
  if(err) {
      throw err;
  }
  jsonTestObject = result;
});

describe('b2bOptic', function() {  
  it('Original and serialized objects should match', function() {
    assert.deepEqual(jsonValidObject, jsonTestObject);
  }); 
});