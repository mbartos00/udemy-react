import { useState } from 'react';
import styled from 'styled-components';
import Card from './components/UI/Card/Card';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding-inline: 5rem;
  flex-direction: column;
  gap: 2rem;
`;

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserAdd = user => {
    setUsers(prev => [
      { ...user, id: Math.random().toString() },
      ...prev,
    ]);
  };

  return (
    <StyledWrapper className='App'>
      <Card>
        <Form onUserAdd={handleUserAdd} />
      </Card>
      <UserList users={users} />
    </StyledWrapper>
  );
};

export default App;
