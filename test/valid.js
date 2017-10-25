"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

files.loadValidXml(function(err, data){
  if(err){
    throw err;
  }else{
    b2boptic_lensorder.validate(data, function(err, data){
      if(err){
        throw err;
      }
      describe('valid', function() {  
        it('The xml should be valid', function() {
          assert.equal(true, data);
        });  
      });
    });
    
  }
});
