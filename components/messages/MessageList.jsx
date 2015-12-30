import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => <Message key={message.id} {... this.props} message = {message} />)}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default MessageList;
