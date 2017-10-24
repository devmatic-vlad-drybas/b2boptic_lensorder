"use strict";

var assert = require('assert');

var b2boptic_lensorder = require('../index.js');

var common = require('./common');

var xmlValid = common.loadValidXml();
var resultValid = b2boptic_lensorder.validate(xmlValid);

var xmlInvalid = common.loadInvalidXml();
var resultInvalid = b2boptic_lensorder.validate(xmlInvalid);

describe('b2bOptic', function() {  
  it('The xml should be valid', function() {
    assert.equal(true, resultValid);
  });  
  it('The xml should be invalid', function() {
    assert.equal(false, resultInvalid);
  });  
});