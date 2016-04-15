import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="comp-img">
    	<img src={this.props.def.properties.src}></img>
    </div>;
  }
});