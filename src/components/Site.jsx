// src/compoenets/Site.jsx
import React from 'react'
import ReactDOM from 'react-dom'

var Site = React.createClass({
	render() {
		const test_text = "heya";
		return (
			<h1> {this.props.test_text} </h1>
		);
	}
})

//ReactDOM.render((
//	<Site />
//	), document.getElementByID('root'))