import React, {Component} from 'react';

import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'><h3 className='panel-title'>Channels</h3></div>
        <div className='panel-body'>
          <ChannelList {... this.props}/>
          <ChannelForm {... this.props}/>
        </div>
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelSection;
