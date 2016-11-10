var React = require('react');
import Banner from './Banner.jsx'
import Content from './Content.jsx'

class HTML_wrapper extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title>
        </head>
        <body>
        	<Banner />
        	<Content />
        </body>
      </html>
    );
  }
}

module.exports = HTML_wrapper;