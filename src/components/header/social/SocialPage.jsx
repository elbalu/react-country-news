var React = require('react');

var SocialPage = React.createClass({
  render: function() {
    return (<h1>{this.props.params.page}</h1>);
  }
});

module.exports = SocialPage;
