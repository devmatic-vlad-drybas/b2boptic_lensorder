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
  
  b2boptic_lensorder.deserialize(data, function(err, data){

    if(err){
      throw err;
    }

    describe('deserialize', function() {  
      it('The xml should match with the deserialized and stringified version', function() {
        assert.deepEqual(jsonValidObject, data);
      }); 
    });
  });  

});
