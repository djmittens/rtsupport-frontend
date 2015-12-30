import React, {Component} from 'react';

class ChannelForm extends Component {
  onSubmit (e) {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = '';
  }

  render () {
    return (
      <form onSubmit = {this.onSubmit.bind(this)}>
        <div className='input-group'>
          <span className='input-group-addon'>#</span>
          <input type= 'text' ref= 'channel' className='form-control' placeholder='New Channel' />
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm;
