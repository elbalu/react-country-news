var React = require('react');

var HeaderTitle = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.headerText}</h2>
        <h4>{this.props.subHeaderText}</h4>
      </div>
    );
  }
});

module.exports = HeaderTitle;
