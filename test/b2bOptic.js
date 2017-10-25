"use strict";

var files = require('../helpers/files');

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

describe('b2bOptic', function() {  
  it('The object string notation should match', function() {
    files.loadSchema(function(err, dataSchema){
      if(err){
        throw err;
      }

      b2boptic_lensorder.b2bOptic(function(err, data){
        if(err){
          throw err;
        }
        assert.equal(dataSchema, JSON.stringify(data));
      });

    });
    
  });  
});