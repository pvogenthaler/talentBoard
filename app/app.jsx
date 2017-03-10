import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Dashboard} from './containers/dashboard.jsx';
import {Example} from './containers/example.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/profile" component={Example}/>
    <Route path="/search" component={Example}/>
    <Route path="/favorites" component={Example}/>
    <Route path="/history" component={Example}/>
    <Route path="/options" component={Example}/>
  </Router>,
  document.getElementById('container')
);
