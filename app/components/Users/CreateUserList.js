import CreateUserItem from "./CreateUserItem";

export default function CreateUserList(props) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {props.users.map((user) => (
          <CreateUserItem username={user.username} id={user.id} />
        ))}
      </ul>
    </div>
  );
}
