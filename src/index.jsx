import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './components/Scene';

const mockdata = [
    {
      "id": 437340633,
      "elements": [
        {
          "content": "点击此处进行编辑",
          "id": 5231947155,
          "type": 2
        },
        {
          "id": 8702727303,
          "properties": {
            "src": "http://ww1.sinaimg.cn/bmiddle/005GvWiUjw1eps93yk75ij30mi0de755.jpg",
          },
          "type": 4
        }
      ]
    }
];

ReactDOM.render(
  <Scene def={mockdata} />,
  document.getElementById('app')
);