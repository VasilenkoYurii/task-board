import { selectUser } from "../../interfaces/interfaces";

export const UsersList = ({
  users,
  hendleSelectUser,
  selectUser,
}: {
  users: selectUser[];
  hendleSelectUser: Function;
  selectUser: selectUser | null;
}) => {
  const hendleClickSelect = (user: object) => {
    hendleSelectUser(user);
  };

  return (
    <>
      {selectUser && (
        <div style={{ margin: 100, border: "1px solid #000000" }}>
          <p>{selectUser.name}</p>
          <p>{selectUser.email}</p>
        </div>
      )}

      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={() => hendleClickSelect(user)}>select</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
