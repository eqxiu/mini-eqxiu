import React from 'react';
import Comptype from '../const/Comptype';

export default React.createClass({
  render: function() {
    return <div className="toolbar">
      <button onClick={() => this.props.addElement(Comptype.TEXT)}>Text</button>
      <button onClick={() => this.props.addElement(Comptype.IMAGE)}>Image</button>
      <button onClick={() => this.props.addPage()}>Add Page</button>
    </div>;
  }
});