import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import Image from './Image';

export default React.createClass({
  getElementByType: function(elementDef) {
    switch (elementDef.get('type') + '') {
      case '2':
        return <Text def={elementDef}/>;
      case '4':
        return <Image def={elementDef}/>;
      default:
    }
  },
  componentDidMount: function() {
    var dom = ReactDOM.findDOMNode(this);
    var styles = this.props.def.css;
    for(var key in styles) {
      dom.style[key] = styles[key];
    }
  },
  render: function() {
    return <div className="element">
      {this.getElementByType(this.props.def)}
    </div>;
  }
});