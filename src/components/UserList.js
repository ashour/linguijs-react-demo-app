import React from 'react';
import User from './User';

function UserList({ users }) {
  return users.map(user => <User user={user} key={user.id} />);
}

export default UserList;

