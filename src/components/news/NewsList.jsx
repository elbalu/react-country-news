var React = require('react');
var NewsItem = require('./News.jsx');

var NewsList = React.createClass({
  render: function() {

    var createNewsItem = function(item, index) {
      return <NewsItem key={index + item.name} news={item} />;
    };

    return (<ul className="news-list">{this.props.items.map(createNewsItem)}</ul>);
  }
});

module.exports = NewsList;
