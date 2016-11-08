'use strict';

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

app.get('/', function (request, result) {
	result.send((0, _template2.default)('test scriptz'));
});

app.listen(8080, function () {
	console.log('Testerroo');
});