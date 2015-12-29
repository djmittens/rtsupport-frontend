import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: props.channels || [],
      activeChannel: props.activeChannel || {}
    };
  }

  setChannel(channel) {
    console.log("Setting A channel");
    this.state.activeChannelz
    this.setState({activeChannel: channel});
  }

  addChannel(channelName) {
    console.log("Adding A channel");
    let channels = this.state.channels;
    channels.push({name: channelName});

    this.setState({channels: channels});
  }

  render() {
    return (
      <div>
        <ChannelSection
          {... this.state}
          setChannel= {this.setChannel.bind(this)}
          addChannel= {this.addChannel.bind(this)}
        />
      </div>
    );
  }
}

App.propTypes = {
  channels: React.PropTypes.array,
  activeChannel: React.PropTypes.array
}

export default App;
