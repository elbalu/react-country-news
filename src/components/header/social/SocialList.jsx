var React = require('react');
var SocialListItem = require('./SocialListItem.jsx');

var SocialList = React.createClass({
  render: function() {

    var createSocialItem = function(item, index) {
      return <SocialListItem key={index + item.name} name={item.name} />;
    };

    return (<ul className="nav navbar-nav navbar-right">{this.props.items.map(createSocialItem)}</ul>);
  }
});

module.exports = SocialList;
