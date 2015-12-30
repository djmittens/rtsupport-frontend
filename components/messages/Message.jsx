import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div className='media'>
        <div className='media-left'>
          <img className='media-object img-rounded' src={'http://api.adorable.io/avatars/64/' + this.props.message.user.name + '.png'}/>
        </div>
        <div className='media-body'>
          <h4 className='media-heading'>{this.props.message.user.name}</h4>
          <p>{this.props.message.text}</p>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
}

export default Message;
