import { UserState } from "@store/users";
import styled from 'styled-components';

const Layout = styled.div`
  ul {
    list-style: none;
    padding-left: 0px;
  }

  li {
    padding: 10px 5px;
    cursor:pointer;
    :hover {background-color: #ededed}
  }
`

type HandleUserFunction = (user: UserState) => void

interface Props {
    className: string;
    users: UserState[]
    handleSetSelectedUser: HandleUserFunction
}


function UserListItem(user: UserState, handleSetSelectedUser: HandleUserFunction) {

    const { firstName, lastName, phone, email, username } = user.profile;

    return (
        <li key={user.id as number} onClick={() => handleSetSelectedUser(user)}> {firstName} {lastName} </li>
    )
}


export default function UserList(props: Props) {

    const users = props.users.map((user) => {
        return UserListItem(user, props.handleSetSelectedUser)
    })

    return (
        <Layout className={props.className}>
            <h1>User List</h1>
            <ul>
                {users}
            </ul>
        </Layout>
    )
}
