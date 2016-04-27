import React from 'react';
import Page from './Page';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import CSSModules from 'react-css-modules';
import styles from '../style.css';

const Scene = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div styleName='scene'>
      {this.props.pages.map(entry =>
        <Page key={entry.get('id')} elements={entry.get('elements')}/>
      )}
    </div>;
  }
});

export default CSSModules(Scene, styles);