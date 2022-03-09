import "./App.css";
import {
  user_1,
  user_2,
  user_3,
  user_4,
  user_5,
  user_6,
  user_7,
  user_8,
  user_9,
  user_10,
} from "../src/images";
import UserProfile from "./components/UserProfile/Userprofile";
import { useState } from "react";
import Heading from "./components/Heading/Heading";
import UserList from "./components/UserList/UserList";

export type UserListType = {
  id: number;
  name: string;
  status: "Active" | "Inactive";
  access: "Owner" | "Manager" | "Read";
  symbol: "Lock" | "Bin";
  email: string;
  image: string;
};

const userList: UserListType[] = [
  {
    id: 1,
    name: "Jana Strassmann",
    status: "Active",
    access: "Owner",
    symbol: "Lock",
    email: "batz.mortimer@yahoo.com",
    image: user_1,
  },
  {
    id: 2,
    name: "Jube Bowman",
    status: "Inactive",
    access: "Manager",
    symbol: "Bin",
    email: "ullrich_owen@kristin.biz",
    image: user_2,
  },
  {
    id: 3,
    name: "Kwak Seong-Min",
    status: "Inactive",
    access: "Read",
    symbol: "Bin",
    email: "kale_kehner@yahoo.com",
    image: user_3,
  },
  {
    id: 4,
    name: "Leon Hunt",
    status: "Inactive",
    access: "Manager",
    symbol: "Bin",
    email: "kale_kehner@yahoo.com",
    image: user_4,
  },
  {
    id: 5,
    name: "Nithithorn Prinya",
    status: "Inactive",
    access: "Manager",
    symbol: "Bin",
    email: "batz.mortimer@yahoo.com",
    image: user_5,
  },
  {
    id: 6,
    name: "Nombeko Mabandia",
    status: "Inactive",
    access: "Read",
    symbol: "Bin",
    email: "kale_kehner@yahoo.com",
    image: user_6,
  },
  {
    id: 7,
    name: "Nwoye Akachi",
    status: "Inactive",
    access: "Manager",
    symbol: "Bin",
    email: "kale_kehner@yahoo.com",
    image: user_7,
  },
  {
    id: 8,
    name: "Paulina Gayoso",
    status: "Inactive",
    access: "Read",
    symbol: "Bin",
    email: "ullrich_owen@kristin.biz",
    image: user_8,
  },
  {
    id: 9,
    name: "Phawta Tauntayakul",
    status: "Inactive",
    access: "Manager",
    symbol: "Bin",
    email: "batz.mortimer@yahoo.com",
    image: user_9,
  },
  {
    id: 10,
    name: "Siri Jakobsson",
    status: "Inactive",
    access: "Manager",
    symbol: "Bin",
    email: "ullrich_owen@kristin.biz",
    image: user_10,
  },
];

function App() {
  const [selectedUser, setSelectedUser] = useState<UserListType | null>(null);
  const handleHover = (id: number) => {
    const selectedUserInfo = userList.find((user) => user.id === id);
    if (selectedUserInfo) {
      setSelectedUser(selectedUserInfo);
    }
  };

  const handleMouseLeave = () => {
    setSelectedUser(null);
  };

  const profile_info = selectedUser !== null && (
    <UserProfile selectedUser={selectedUser} />
  );
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <div className="left-block">
            <Heading />
            <UserList
              userList={userList}
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="right-block">{profile_info}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
