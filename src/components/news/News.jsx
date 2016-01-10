var React = require('react');
var ImageList = require('./ImageList.jsx');

var NewsPage = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <li className="row">
        <div className="col-md-2">
          <img src={this.props.news.author.logo} />
        </div>
        <div className="col-md-10">
          <h2>{this.props.news.feed.headLine}</h2>
          <h4>{this.props.news.feed.subHeadLine}</h4>
          <p>{this.props.news.feed.subject}</p>
          <ImageList items={this.props.news.feed.photos}/>
          <p>{this.props.news.author.location.state},{this.props.news.author.location.country}</p>
        </div>
      </li>

    );
  }
});

module.exports = NewsPage;
