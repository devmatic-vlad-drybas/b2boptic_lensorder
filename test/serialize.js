"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

files.loadValidXml(function(err, data){

  if(err) {
    throw err;
  }

  var parseString = require('xml2js').parseString;
  var jsonValidObject = null;
  parseString(data, function(err,result){
    if(err) {
        throw err;
    }
    jsonValidObject = result;
  });
  
  b2boptic_lensorder.serialize(jsonValidObject, function(err, data){
    if(err) {
      throw err;
    }
    var xmlTestString = data;
    var jsonTestObject = null;
    parseString(xmlTestString, function(err,result){
      if(err) {
          throw err;
      }
      jsonTestObject = result;
    });
    
    describe('serialize', function() {  
      it('Original and serialized objects should match', function() {
        assert.deepEqual(jsonValidObject, jsonTestObject);
      }); 
    });


  });

  

});

