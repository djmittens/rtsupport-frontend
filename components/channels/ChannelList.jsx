import React, {Component} from 'react';

import Channel from './Channel.jsx';

class ChannelList extends Component {
  render () {
    return (
      <ul className='list-group'> {
      this.props.channels.map( chan => {
        return <Channel
          key = {chan.id}
          {... this.props}
          channel = {chan}
        />
        })
      }
      </ul>
    );
  }
}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList;
