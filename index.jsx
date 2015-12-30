import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
  getAppWithTestData(),
  document.getElementById('app')
);

function getAppWithTestData() {
  const activeChannel =
    {id: 0, name: 'Flowers n\' shit'};
  const activeUser =
    {id: 0, name: 'Anonymous'};

  let channels = [activeChannel];
  let users = [activeUser];
  let messages = [];

  for(var i = 1; i < 20; i ++) {
    channels.push({
      id: i,
      name: 'Channel ' + i
    });

    let user = {
      id: i,
      name: 'User ' + i
    }
    users.push(user);

    messages.push({
      id: i,
      user: user,
      text: 'Wooh im typing too!'
    });
  }

  let params = {channels, users, messages, activeUser, activeChannel};

  return <App {... params} />
}
