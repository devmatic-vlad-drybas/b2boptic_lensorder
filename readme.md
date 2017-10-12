# b2bOptic Lens Order Interface

[travis-build]: https://travis-ci.org/mossandlichens/b2boptic_lensorder.svg?branch=master
![travis-build]

## Install:
npm install b2boptic_lensorder

## Usage:
var b2bOptic_lensorder = require('b2boptic_lensorder');  
var emptyLensOrderObject = b2bOptic_lensorder.b2bOptic();  
var lensOrderValid = b2boptic_lensorder.validate(xmlString);  
var lensOrderObject = b2boptic_lensorder.deserialize(xmlString);

## Future releases:
* _serialize_ - To convert javascript object to xml

## Github (Code and Issues):
[b2boptic_lensorder](https://github.com/mossandlichens/b2boptic_lensorder)

## Libraries
[xsd2json](https://www.npmjs.com/package/xsd2json) - for generating json schema from xml schema  
[mocha](https://www.npmjs.com/package/mocha) - for unit testing functions

## Status:
Beta
