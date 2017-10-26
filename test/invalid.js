"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

describe('invalid', function() {  
  it('The xml should NOT be valid', function() {
    
    var invalidXml = files.loadInvalidXml();

    b2boptic_lensorder.validate(invalidXml, function(err, data){
      if(err){
        throw err;
      }
      
          assert.equal(false, data);
        
    });
    
  });  
});

