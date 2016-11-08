'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/compoenets/Site.jsx
var Site = _react2.default.createClass({
	displayName: 'Site',
	render: function render() {
		var test_text = "heya";
		return _react2.default.createElement(
			'h1',
			null,
			' ',
			this.props.test_text,
			' '
		);
	}
});

//ReactDOM.render((
//	<Site />
//	), document.getElementByID('root'))