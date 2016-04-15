export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function addElement(elementType) {
  return {
    type: 'ADD_ELEMENT',
    elementType
  };
}