import UserList from '@components/users/UserList';
import User from '@components/users/User';
import styled from 'styled-components';
import {userListAtom} from '@store/users'
import { atom, useRecoilValue } from 'recoil';

const Layout = styled.div`
  display: flex;

  .list {
    width: 23%;
    margin-right: 20px;
  }
`;

export default function UserPage() {
    
  const users = useRecoilValue(userListAtom)

  return (
    <Layout>
      <UserList className="list" users={users} />
      <User />
    </Layout>
  );
}

