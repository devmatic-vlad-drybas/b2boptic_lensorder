"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

describe('valid', function() {  
  it('The xml should be valid', function() {
  files.loadValidXml(function(err, data){
    if(err){
      throw err;
    }else{
      b2boptic_lensorder.validate(data, function(err, data){
        if(err){
          throw err;
        }
        
        assert.equal(true, data);
          
      });
      
    }
  });
});  
});
