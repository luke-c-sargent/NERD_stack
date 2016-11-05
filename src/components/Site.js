// src/compoenets/Site.js
var Site = React.createClass({
	render : function() {
		const test_text = "heya";
		return (<h1> {this.props.test_text} </h1>);
	}
}
ReactDOM.render((
	<Site />
	), document.getElementByID('main'))