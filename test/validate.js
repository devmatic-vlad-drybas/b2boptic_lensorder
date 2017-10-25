"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var files = require('../helpers/files');

var xmlValid = files.loadValidXml();
var resultValid = b2boptic_lensorder.validate(xmlValid);

var xmlInvalid = files.loadInvalidXml();
var resultInvalid = b2boptic_lensorder.validate(xmlInvalid);

describe('b2bOptic', function() {  
  it('The xml should be valid', function() {
    assert.equal(true, resultValid);
  });  
  it('The xml should be invalid', function() {
    assert.equal(false, resultInvalid);
  });  
});