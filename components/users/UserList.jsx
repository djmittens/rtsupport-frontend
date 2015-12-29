import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
  render() {
    return (
      <ul className='list-group'>
        {this.props.users.map( (user) => <User key = {user.name} user = {user} {... this.props} />)}
      </ul>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default UserList;
