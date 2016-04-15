import React from 'react';
import Page from './Page';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="scene">
      {this.props.pages.map(entry =>
        <Page key={entry.get('id')} elements={entry.get('elements')}/>
      )}
    </div>;
  }
});