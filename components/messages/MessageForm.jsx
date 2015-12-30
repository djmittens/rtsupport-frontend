import React, {Component} from 'react';

class MessageForm extends Component {
  onSubmit(event) {
    event.preventDefault();
    const {newMessage} = this.refs;
    let message = newMessage.value;
    newMessage.value = '';

    this.props.submitMessage(message);
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit.bind(this)}>
        <div className='input-group'>
          <span className='input-group-addon'>/say</span>
          <input type= 'text' ref= 'newMessage' className='form-control' placeholder='Say something...'  />
        </div>
      </form>
    );
  }
}

MessageForm.propTypes = {
  submitMessage: React.PropTypes.func.isRequired
}

export default MessageForm;
