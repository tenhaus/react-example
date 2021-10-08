import UserList from '@components/users/UserList';
import User from '@components/users/User';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;

  .list {
    width: 23%;
    margin-right: 20px;
  }
`;

export default function UserPage() {
  return (
    <Layout>
      <UserList className="list" />
      <User />
    </Layout>
  );
}
