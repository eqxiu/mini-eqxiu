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

export function addPage(state) {
  return {
    type: 'ADD_PAGE'
  };
}

export function setActivePage(pageIndex) {
	return {
		type: 'SET_ACTIVE_PAGE',
		pageIndex: pageIndex
	};
}