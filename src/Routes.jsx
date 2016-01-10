var React = require('react');
var ReactRouter = require('react-router');
var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');
var SocialPage = require('./components/header/social/SocialPage.jsx');
var NewsPage = require('./components/news/NewsPage.jsx');
var PhotosPage = require('./components/photos/PhotosPage.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base} >
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/social/:page" component={SocialPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/photos" component={PhotosPage} />
    </Route>
  </Router>
);

module.exports = Routes;
