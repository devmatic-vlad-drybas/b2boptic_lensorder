"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var common = require('./common');

var xmlValid = common.loadValidXml();
var parseString = require('xml2js').parseString;
var jsonValidObject = null;
parseString(xmlValid, function(err,result){
  if(err) {
      throw err;
  }
  jsonValidObject = result;
});

var jsonTestObject = b2boptic_lensorder.deserialize(xmlValid);

describe('b2bOptic', function() {  
  it('The xml should match with the deserialized and stringified version', function() {
    assert.deepEqual(jsonValidObject, jsonTestObject);
  }); 
});