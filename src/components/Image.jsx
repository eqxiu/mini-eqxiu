import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="comp-img">
      <img src={this.props.def.getIn(['properties', 'src'])}></img>
    </div>;
  }
});