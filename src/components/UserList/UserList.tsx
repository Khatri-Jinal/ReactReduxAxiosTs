import { UserListType } from "../../App";
import User from "../User/User";

interface UserListPropTypes {
  userList: UserListType[];
  handleHover: (id: number) => void;
  handleMouseLeave: () => void;
}

function UserList({
  userList,
  handleHover,
  handleMouseLeave,
}: UserListPropTypes) {
  return (
    <>
      <ul>
        {userList.map((user) => {
          return (
            <User
              key={user.id}
              {...user}
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </ul>
    </>
  );
}
export default UserList;
