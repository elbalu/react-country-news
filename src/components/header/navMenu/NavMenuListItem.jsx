var React = require('react');

var NavMenuListItem = React.createClass({
 dynamicUrl: function() {
   return "/#/" + this.props.name
 },
 capitalizeString: function() {
   return this.props.name.toUpperCase();
 },
  render: function() {
    var NavMenuListStyle = {
      "float": "left",
      "listStyle": "none",
      "marginRight": 10
    };
    return (
      <li style={NavMenuListStyle}>
        <a href={this.dynamicUrl()}>{this.capitalizeString()}</a>
      </li>
    );
  }
});

module.exports = NavMenuListItem;
