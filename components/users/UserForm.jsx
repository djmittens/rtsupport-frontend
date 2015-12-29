import React, {Component} from 'react';

class UserForm extends Component {

  onSubmit(event) {
    event.preventDefault();
    const node = this.refs.userName;
    const userName = node.value;
    node.value = '';

    this.props.setUserName(userName);
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit.bind(this)}>
        <div className='input-group'>
          <span className='input-group-addon'>@</span>
          <input type = 'text' className = 'form-control' placeholder = 'Set Username' ref = 'userName'/>
        </div>
      </form>
    );
  }
}

UserForm.propTypes = {
  setUserName: React.PropTypes.func.isRequired
}

export default UserForm;
