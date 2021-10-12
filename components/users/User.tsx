import { UserState } from "@store/users";

interface Props {
  user: UserState
}

export default function User(props:Props) {
  if (!props.user) return <div/>
  
  return (
    <div>
      <h1> User </h1>
      <div>
        <p>ID: {props.user.id}</p>
        <p>Username: {props.user.profile.username}</p>
        <p>Name: {props.user.profile.firstName} {props.user.profile.lastName}</p>
        <p>Email: {props.user.profile.email}</p>
        <p>Phone: {props.user.profile.phone}</p>
      </div>
    </div>
  )
}
