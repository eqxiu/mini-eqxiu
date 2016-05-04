import React from 'react';
import {FlippableSceneContainer} from '../components/FlippableScene';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="canva">
      	<FlippableSceneContainer {...this.props}/>
    </div>;
  }
});
