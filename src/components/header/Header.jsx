var React = require('react');
var SocialList = require('./social/SocialList.jsx');
var NavMenuList = require('./navMenu/NavMenuList.jsx');
var HeaderTitle = require('./HeaderTitle.jsx');
var Data = require('./data');

var mainDivStyles = {
  'color': '#fff',
  'backgroundColor': '#3E51B5'
};
var Header = React.createClass({
  render: function() {
    return (
      <div className="main" style={mainDivStyles}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <HeaderTitle headerText="Country News" subHeaderText="Top stories in my country"/>
            </div>
            <div className="col-md-4">
              <SocialList items={Data[0].SocialListData}/>
              <NavMenuList items={Data[1].NavMenuListData}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
