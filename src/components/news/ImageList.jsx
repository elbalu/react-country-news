var React = require('react');
var ImageListItem = require('./ImageListItem.jsx');

var ImageList = React.createClass({
  render: function() {

    var createImageItem = function(item, index) {
      return <ImageListItem key={index + item.name} img={item} />;
    };

    return (<ul className="img-list">{this.props.items.map(createImageItem)}</ul>);
  }
});

module.exports = ImageList;
