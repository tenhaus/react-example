import { useState } from 'react';
import UserList from '@components/users/UserList';
import User from '@components/users/User';
import styled from 'styled-components';
import {userListAtom} from '@store/users'
import { atom, useRecoilValue } from 'recoil';

const Layout = styled.div`
  display: flex;
  padding-top: 30px;

  .list {
    margin-right: 20px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export default function UserPage() {
  const [selectedUser, setSelectedUser] = useState(undefined)

  const users = useRecoilValue(userListAtom)

  function handleSetSelectedUser(userPassedIn) {
    setSelectedUser(userPassedIn)
  }

  return (
    <Layout>
      <UserList className="list" users={users} handleSetSelectedUser={handleSetSelectedUser} />
      <User user={selectedUser}/>
    </Layout>
  );
}

