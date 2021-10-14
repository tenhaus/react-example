import { useState } from 'react';
import { useRouter } from 'next/router'
import UserList from '@components/users/UserList';
import User from '@components/users/User';
import styled from 'styled-components';
import { userListAtom } from '@store/users'
import { useAtom } from 'jotai';

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

    const router = useRouter()
    const { id } = router.query
    const [users] = useAtom(userListAtom)
    const selectedUser = users.find((user)=>user.id == parseInt(id as string))
    

    function handleSetSelectedUser(userPassedIn) {
    
    }

    return (
        <Layout>
            <UserList className="list" users={users} handleSetSelectedUser={handleSetSelectedUser} />
            <User user={selectedUser} />
        </Layout>
    );
}

