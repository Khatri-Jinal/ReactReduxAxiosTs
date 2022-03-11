// import { UserListType } from "../../App";
// import User from "../User/User";

// interface UserListPropTypes {
//   userList: UserListType[];
//   handleHover: (id: number) => void;
//   handleMouseLeave: () => void;
// }

// function UserList({
//   userList,
//   handleHover,
//   handleMouseLeave,
// }: UserListPropTypes) {
//   return (
//     <>
//       <ul>
//         {userList.map((user) => {
//           return (
//             <User
//               key={user.id}
//               {...user}
//               handleHover={handleHover}
//               handleMouseLeave={handleMouseLeave}
//             />
//           );
//         })}
//       </ul>
//     </>
//   );
// }
// export default UserList;

import React, { useEffect } from "react";
import { connect } from "react-redux";

//import { fetchUsers } from "../action/usersAction";

// function UserList({
//   userData,
//   fetchUsers,
// }: {
//   userData: any;
//   fetchUsers: any;
// }) {
//   useEffect(() => {
//     fetchUsers();
//   }, [fetchUsers]);
//   return userData.loading ? (
//     <h2>Loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>userlist</h2>
//       <div>
//         {userData &&
//           userData.users &&
//           userData.users.map((user: any) => {
//             return <p>{user.name}</p>;
//           })}
//       </div>
//     </div>
//   );
// }
// const mapStateToProps = (state: any) => {
//   return {
//     userData: state.user,
//   };
// };
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
