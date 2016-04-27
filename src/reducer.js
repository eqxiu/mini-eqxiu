import {Map, List} from 'immutable';
import {generateId} from './utils/utils'
import Comptype from './const/Comptype';

function setState(state, newState) {
  return state.merge(newState);
}

function addText(state) {
  return state.updateIn(['pageList', state.get('activePageIndex'), 'elements'], list => list.push(Map({
      "content": "点击此处进行编辑",
      "id": generateId(),
      "type": 2
    })
  ));
}

function addImage(state) {
  return state.updateIn(['pageList', state.get('activePageIndex'), 'elements'], list => list.push(Map({
      "id": generateId(),
      "properties": Map({
        "src": "http://ww1.sinaimg.cn/bmiddle/005GvWiUjw1eps93yk75ij30mi0de755.jpg",
      }),
      "type": 4
    })
  ));
}          

function addElement(state, elementType) {
  switch (elementType) {
    case Comptype.TEXT: 
      return addText(state);
    case Comptype.IMAGE:
      return addImage(state);
  }
  
}

function addPage(state) {
  return state.set('activePageIndex', state.get('activePageIndex') + 1).update('pageList', list => list.insert(state.get('activePageIndex')+1, Map({
    "id": generateId(),
    "elements": List()
  })));
}

function setActivePage(state, pageIndex) {
  return state.set('activePageIndex', pageIndex);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_ELEMENT':
    return addElement(state, action.elementType);
  case 'ADD_PAGE':
    return addPage(state);
  case 'SET_ACTIVE_PAGE':
    return setActivePage(state, action.pageIndex);
  }
  return state;
}
