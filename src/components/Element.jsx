import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import Image from './Image';

export default React.createClass({
  getElementByType: function(elementDef) {
    switch (elementDef.get('type') + '') {
      case '2':
        return <Text {...this.props}/>;
      case '4':
        return <Image {...this.props}/>;
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