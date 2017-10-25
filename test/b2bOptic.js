"use strict";

var files = require('../helpers/files');

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var b2boptic_lensorder_object = b2boptic_lensorder.b2bOptic();

describe('b2bOptic', function() {  
  it('The object string notation should match', function() {
    assert.equal(files.loadSchema(), JSON.stringify(b2boptic_lensorder_object));
  });  
});