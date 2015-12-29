import React, {Component} from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';


class UserSection extends Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'> Online Users </h3>
        </div>
        <div className='panel-body'>
          <UserList {... this.props} />
          <UserForm {... this.props} />
        </div>
      </div>
    );
  }
}

UserSection.propTypes = {
  users: React.PropTypes.array.isRequired,
  activeUser: React.PropTypes.object.isRequired,
  setUserName: React.PropTypes.func.isRequired
}

export default UserSection;
