import React from 'react';
import Canva from './Canva';
import Toolbar from './Toolbar';

export default React.createClass({
  addElement: function(type) {
  	console.log(type);
  },
  render: function() {
    return <div className="editor">
      <Canva/>
      <Toolbar addElement={this.addElement}/>
    </div>;
  }
});