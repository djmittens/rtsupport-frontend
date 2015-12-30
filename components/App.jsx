import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  setChannel(channel) {
    console.log("Setting A channel");
    this.state.activeChannelz
    this.setState({activeChannel: channel});
  }

  addChannel(channelName) {
    console.log("Adding A channel");
    let channels = this.state.channels;
    channels.push({id: channelName, name: channelName});

    this.setState({channels});
  }

  setUserName(userName) {
    const {activeUser} = this.state;
    activeUser.name = userName;
    this.setState({activeUser});
  }

  submitMessage(messageText) {
    console.log("Sending a message " + messageText);
  }

  render() {
    return (
      <div className='app'>
        <div className='sidebar'>
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
        <MessageSection
          {...this.state}
          submitMessage={this.submitMessage.bind(this)}
        />
      </div>
    );
  }
}

App.propTypes = {
  channels: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired,
  users: React.PropTypes.array.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default App;
