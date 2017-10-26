"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

describe('deserialize', function() {  
  it('The xml should match with the deserialized and stringified version', function() {

  var validXml = files.loadValidXml();

  var parseString = require('xml2js').parseString;
  var jsonValidObject = null;
  parseString(validXml, function(err,result){
    if(err) {
        throw err;
    }
    jsonValidObject = result;
  });
  
  b2boptic_lensorder.deserialize(validXml, function(err, data){

    if(err){
      throw err;
    }

    
        assert.deepEqual(jsonValidObject, data);
     
  });  

}); 
});