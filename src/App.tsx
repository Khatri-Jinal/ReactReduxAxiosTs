import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "./actions/UserActions";
import { UserType } from "./actions/UserActionTypes";
import UserPagination from "./components/UserPagination/UserPagination";
import { RootStore } from "./store";

export interface DataType {
  selected: number;
}

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootStore) => state.users);
  const [userdata, setUserData] = useState<UserType[] | [] | undefined>([]);
  const [pagenum, setPageNum] = useState(1);
  console.log("user state:", userState);
  const handlePageClick = (data: DataType) => {
    setPageNum(data.selected + 1);
  };

  useEffect(() => {
    console.log("number is", pagenum);
    dispatch(GetUser(pagenum));
    if (userState.users) {
      setUserData(userState.users);
    }
  }, [pagenum]);

  useEffect(() => {
    setUserData(userState.users);
  }, []);
  return (
    <div className="App">
      <ul>
        {userState.loading ? (
          <li>Loading</li>
        ) : userdata ? (
          userdata.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })
        ) : (
          <li>Not found</li>
        )}
      </ul>
      <div className="pagination-container">
        <UserPagination handlePageClick={handlePageClick} />
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="pagination-container">
        <UserPagination handlePageClick={handlePageClick} />
      </div> */
}

// return (
//   <div className="App">

//         <ul>
//           {userState.loading ? (
//             <p>Loading</p>
//           ) : userState.users ? (
//             userState.users.map((user) => {
//               return user !== null ? (
//                 <li key={user.id}>{user.first_name}</li>
//               ) : (
//                 <p>No data found</p>
//               );
//             })
//           ) : (
//             <p>Not found</p>
//           )}
//         </ul>
//       </div>
//     )}
//     {/* {!userState.loading && <ul>{userState.map(user)}</ul>} */}

//   </div>
// );
