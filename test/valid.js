"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

describe('valid', function() {  
  it('The xml should be valid', function() {
  var validXml = files.loadValidXml();

      b2boptic_lensorder.validate(validXml, function(err, data){
        if(err){
          throw err;
        }
        
        assert.equal(true, data);
          
      });
      
    });

});
