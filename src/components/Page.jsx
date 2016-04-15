import React from 'react';
import Element from './Element';

export default React.createClass({
  render: function() {
    return <div className="page">
      {this.props.elements.map(entry =>
        <Element key={entry.get('id')} def={entry}/>
      )}
    </div>;
  }
});