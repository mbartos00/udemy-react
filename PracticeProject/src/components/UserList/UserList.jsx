import React from 'react';
import Card from '../UI/Card/Card';
import UsersListItem from './UsersListItem';

const UserList = ({ users }) => {
  return (
    <Card>
      <UsersListItem users={users} />
    </Card>
  );
};

export default UserList;
