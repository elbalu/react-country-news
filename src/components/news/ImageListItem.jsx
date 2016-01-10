var React = require('react');

var ImageListItem = React.createClass({
  render: function() {
    var imageListStyle = {
      "float": "left",
      "listStyle": "none",
      "marginRight": 10
    };
    return (
      <li style={imageListStyle}>
        <img src={this.props.img.img} />
      </li>
    );
  }
});

module.exports = ImageListItem;
