var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer');
var hashHistory = ReactRouter.hashHistory;

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={HomeContainer} />
        </Route>
    </Router>
);

module.exports = routes;
