import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="comp-text">
      {this.props.def.get('content')}
    </div>;
  }
});