import React from 'react';
import Page from './Page';

export default React.createClass({
  render: function() {
    return <div className="scene">
      {this.props.def.map(entry =>
        <Page key={entry.id} def={entry}/>
      )}
    </div>;
  }
});