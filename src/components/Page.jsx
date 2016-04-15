import React from 'react';
import Element from './Element';

export default React.createClass({
  render: function() {
    return <div className="page">
      {this.props.def.elements.map(entry =>
        <Element key={entry.id} def={entry}/>
      )}
    </div>;
  }
});