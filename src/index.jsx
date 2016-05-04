import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import Scene from './components/Scene';
import {EditorContainer} from './editor/Editor';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    activePageIndex: 0,
    scene: {
      pageMode: 0
    },
    pageList: 
    [{
      "id": 437340633,
      "elements": []
    }]
  }
});

const routes = <Route component={App}>
  <Route path="/" component={EditorContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);