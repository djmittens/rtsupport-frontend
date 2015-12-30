import React, {Component} from 'react';

import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
  render() {
    return (
      <div className='panel panel-default channel-section'>
        <div className='panel-heading'><h3 className='panel-title'>Channels</h3></div>
        <div className='panel-body channel-section__content-wrapper'>
          <div className='channel-section__list-wrapper'>
            <ChannelList {... this.props}/>
          </div>
          <div className='channel-section__new-channel-form'>
            <ChannelForm {... this.props}/>
          </div>
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
