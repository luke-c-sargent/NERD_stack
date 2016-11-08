import Site from './components/Site'

var express = require('express')
var app = express()

const template = require('./template')

app.get('/', function (request, result) {
	result.send(template.root_wrap('test scriptz', "for dayz"))
})

app.listen(8080, function(){
	console.log('Testerroo')
})