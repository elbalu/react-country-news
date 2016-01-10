var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var RaisedButton = require('material-ui/lib/raised-button');
var Dialog = require('material-ui/lib/dialog');
var ThemeManager = require('material-ui/lib/styles/theme-manager');
var LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
var Colors = require('material-ui/lib/styles/colors');
var FlatButton = require('material-ui/lib/flat-button');
var Avatar = require('material-ui/lib/avatar');
var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardHeader = require('material-ui/lib/card/card-header');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');

var Header = require('./header/Header.jsx');

var containerStyle = {
  textAlign: 'center',
  paddingTop: 20
};

var Base = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState: function() {
    return {muiTheme: ThemeManager.getMuiTheme(LightRawTheme), open: false};
  },
  getChildContext: function() {
    return {muiTheme: this.state.muiTheme};
  },

  componentWillMount: function() {
    var newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {accent1Color: Colors.deepOrange500});

    this.setState({muiTheme: newMuiTheme});
  },

  _handleRequestClose: function() {
    this.setState({open: false});
  },

  _handleTouchTap: function() {
    this.setState({open: true});
  },
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
        <h3>Footer</h3>
      </div>
    );
  }
});

module.exports = Base;
