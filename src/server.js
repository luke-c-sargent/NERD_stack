import React from 'react'

var express = require('express')

var app = express()

app.set('views', __dirname + '/components');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function (request, result) {
	result.render('HTML_wrapper',{ title: 'Titley McTitleface'})
})

app.listen(8080, function(){
	console.log('Testerroo!')
})

//ReactDOM.render((
//	<Site />
//	), document.getElementByID('root'))