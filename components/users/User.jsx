import React, {Component} from 'react';

class User extends Component {

  render() {
    const {user, activeUser} = this.props;

    const userNameStyle = {
      paddingLeft: '6px'
    };

    let glyphicon = user === activeUser ? 'glyphicon-knight':'glyphicon-user';

    return (
      <li className={'list-group-item'}>
        <div className='input-group'>
          <span className={'badge glyphicon ' + glyphicon}> </span>
          <span style={userNameStyle}>{user.name}</span>
        </div>
       </li>
    );
  }

}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default User;
