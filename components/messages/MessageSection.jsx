import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
  render() {
    return (
      <div className='message-section'>
        <div className='message-section__message-list'>
          <MessageList {... this.props} />
        </div>
        <div className='message-section__input_form'>
          <MessageForm {... this.props} />
        </div>
      </div>
    );
  }
}

MessageSection.propTypes = {
  submitMessage: React.PropTypes.func.isRequired,
  messages: React.PropTypes.array.isRequired,
}

export default MessageSection;
