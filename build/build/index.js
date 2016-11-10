'use strict';

var _Site = require('./components/Site');

var _Site2 = _interopRequireDefault(_Site);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var express = require('express');
var app = express();

var template = require('./template');

app.get('/', function (request, result) {
	result.send(template.root_wrap('test scriptz', "for dayzz"));
});

app.listen(8080, function () {
	console.log('Testerroo');
});