import React, {Component} from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';


class UserSection extends Component {
  render() {
    return (
      <div className='panel panel-default user-section'>
        <div className='panel-heading'>
          <h3 className='panel-title'> Online Users </h3>
        </div>
        <div className='panel-body user-section__content-wrapper'>
          <div className='user-section__list-wrapper'>
            <UserList {... this.props} />
          </div>
          <div className='user-section__name-change-form'>
            <UserForm {... this.props} />
          </div>
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
