import UserInfo from "../UserInfo/UserInfo";
import "./User.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Lock, Trash2 } from "react-feather";

interface UserProps {
  id: number;
  name: string;
  status: "Active" | "Inactive";
  access: "Owner" | "Manager" | "Read";
  symbol: "Lock" | "Bin";
  email: string;
  image: string;
  handleHover: (id: number) => void;
  handleMouseLeave: () => void;
}

function User({
  id,
  name,
  email,
  image,
  status,
  access,
  handleHover,
  symbol,
  handleMouseLeave,
}: UserProps) {
  const options = ["Active", "Inactive"];
  const currentStatus =
    status === "Active" ? (
      <p style={{ color: "green" }}>{status}</p>
    ) : (
      <Dropdown options={options} value={status} />
    );

  const accessOptions = ["Manager", "Read"];

  const currentAccess =
    access === "Owner" ? (
      <p>{access}</p>
    ) : (
      <Dropdown options={accessOptions} value={access} />
    );

  const sym = symbol === "Lock" ? <Lock /> : <Trash2 />;

  return (
    <div
      className="user"
      onMouseOver={() => handleHover(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="user-info">
        <UserInfo name={name} email={email} image={image} />
      </div>
      <div className="status">{currentStatus}</div>
      <div className="access">{currentAccess}</div>
      <div className="symbol">{sym}</div>
    </div>
  );
}
export default User;
