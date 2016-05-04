import React from 'react';
import SwipeViews from './Swipe';

import Page from './Page';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import CSSModules from 'react-css-modules';
import styles from '../style.css';

import * as actionCreators from '../action_creators';
import {connect} from 'react-redux';

export const FlippableScene = React.createClass({
  render: function() {
    return <SwipeViews setActivePage={this.props.setActivePage} activePageIndex={this.props.activePageIndex} className="comp-text">
      {this.props.pageList.toArray().map(entry =>
        <Page key={entry.get('id')} elements={entry.get('elements')}/>
      )}
    </SwipeViews>;
  }
});

function mapStateToProps(state) {
  return {
    activePageIndex: state.get('activePageIndex')
  };
}

export const FlippableSceneContainer = connect(mapStateToProps, actionCreators)(FlippableScene);