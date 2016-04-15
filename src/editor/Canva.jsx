import React from 'react';
import Scene from '../components/Scene';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="canva">
    	<Scene pages={this.props.pages}/>
    </div>;
  }
});
