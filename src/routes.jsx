var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, NotFoundRoute, Redirect } = Router;
// var components = require('./components');
// var { App, Login, List, NotFound } = components;
var App = require('./components/App');
var Home = require('./components/UI/Home');
var NotFound = require('./components/NotFound');

var routes = (
         <Route name="app" handler={App} path="/">
             <Route name="default" handler={Home} path="/" />
             <NotFoundRoute handler={NotFound} name="not-found" />
         </Route>
	)

module.exports = routes;
























