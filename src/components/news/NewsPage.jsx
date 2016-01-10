var React = require('react');
var Data = require('./data');
var News = require('./NewsList.jsx')
var NewsPage = React.createClass({
  render: function() {
    console.log('data',Data)
    return (
      <div>
        <News items={Data} />
      </div>
    );
  }
});

module.exports = NewsPage;
