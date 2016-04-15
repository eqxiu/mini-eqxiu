import {Map, List} from 'immutable';
import {generateId} from './utils/utils'

function setState(state, newState) {
  return state.merge(newState);
}

function addText(state) {
  return state.updateIn(['pageList', 0, 'elements'], list => list.push(Map({
  "content": "点击此处进行编辑",
  "id": generateId(),
  "type": 2
})
	));
}

function addElement(state, elementType) {
  switch (elementType) {
  	case 2: 
  		return addText(state);
    case 4:
    	return addImage(state);
  }
  
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_ELEMENT':
  	return addElement(state, action.elementType);
  }
  return state;
}
