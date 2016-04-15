import React from 'react';
import Canva from './Canva';
import Toolbar from './Toolbar';
import * as actionCreators from '../action_creators';
import {connect} from 'react-redux';

export const Editor = React.createClass({
  render: function() {
    return <div className="editor">
      <Canva pages={this.props.scene}/>
      <Toolbar {...this.props} />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    scene: state.get('pageList')
  };
}

export const EditorContainer = connect(mapStateToProps, actionCreators)(Editor);
