import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import Scene from './components/Scene';
import Editor from './editor/Editor';

const routes = <Route component={App}>
  <Route path="/" component={Scene} />
  <Route path="/editor" component={Editor} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);