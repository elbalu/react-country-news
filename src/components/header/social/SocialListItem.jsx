var React = require('react');

var SocialListItem = React.createClass({
  dynamicClass: function(){
     return "fa fa-" + this.props.name
 },
 dynamicUrl: function() {
   return "/#/social/" + this.props.name
 },
  render: function() {
    var socialListStyle = {
      "float": "left",
      "listStyle": "none",
      "marginRight": 10
    };
    return (
      <li style={socialListStyle}>
        <a href={this.dynamicUrl()}><i className={this.dynamicClass()} /></a>
      </li>
    );
  }
});

module.exports = SocialListItem;
