var express = require('express')
var app = express()

import template from './template';

app.get('/', function (request, result) {
	result.send(template('test scriptz'))
})

app.listen(8080, function(){
	console.log('Testerroo')
})