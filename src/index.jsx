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
    pageList: 
    [{
      "id": 437340633,
      "elements": [
        
        {
          "id": 8702727303,
          "properties": {
            "src": "http://ww1.sinaimg.cn/bmiddle/005GvWiUjw1eps93yk75ij30mi0de755.jpg",
          },
          "type": 4
        }
      ]
    }]
  }
});

const routes = <Route component={App}>
  <Route path="/" component={Scene} />
  <Route path="/editor" component={EditorContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);