import { User } from "@store/users";

interface Props {
  className: string;
  users: User[]
}

function UserListItem(user: User) {
    const { firstName, lastName, phone, email, username } = user.profile;
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Name: {firstName} {lastName}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
    </div>
    )
}

export default function UserList(props: Props) {
    const users = props.users.map((user) => {
      return UserListItem(user)
    })
    
  return (
    <div>
      <h1 className={props.className}>user list</h1>      
          {users}
    </div>
  )
}
