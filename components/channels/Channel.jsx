import React, {Component} from 'react';

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const {setChannel, channel} = this.props;
    this.props.setChannel(channel);
  }

  render() {
    const {channel, activeChannel} = this.props;
    let active = channel === activeChannel ? 'active': '';

    return (
      <li className= {'list-group-item ' + active} onClick = {this.onClick.bind(this)}>
        <span > {channel.name} </span>
      </li>
    );
  }

}

Channel.propTypes = {
  channel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default Channel;
