var React = require('react');
var NavMenuListItem = require('./NavMenuListItem.jsx');

var NavMenuList = React.createClass({
  render: function() {

    var createNavMenuItem = function(item, index) {
      return <NavMenuListItem key={index + item.name} name={item.name} />;
    };

    return (<ul className="nav navbar-nav navbar-right">{this.props.items.map(createNavMenuItem)}</ul>);
  }
});

module.exports = NavMenuList;
