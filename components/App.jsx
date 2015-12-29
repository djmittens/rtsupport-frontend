import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    const activeUser = {name: 'Anonymous'};

    this.state = {
      channels: props.channels || [],
      activeChannel: props.activeChannel || {},
      users: props.users || [activeUser],
      activeUser: activeUser
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

    this.setState({channels});
  }

  setUserName(userName) {
    const {activeUser} = this.state;
    activeUser.name = userName;
    this.setState({activeUser});
  }

  render() {
    return (
      <div>
        <div className='col-md-3'>
          <ChannelSection
            {...this.state}
            setChannel= {this.setChannel.bind(this)}
            addChannel= {this.addChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            setUserName={this.setUserName.bind(this)}
          />
        </div>
        <div className='col-md-8'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  channels: React.PropTypes.array,
  activeChannel: React.PropTypes.array
}

export default App;
