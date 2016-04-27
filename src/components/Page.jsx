import React from 'react';
import Element from './Element';

import CSSModules from 'react-css-modules';
import styles from '../style.css';

const Page = React.createClass({
  render: function() {
    return <div styleName='page'>
      {this.props.elements.map(entry =>
        <Element key={entry.get('id')} def={entry}/>
      )}
    </div>;
  }
});

export default CSSModules(Page, styles);