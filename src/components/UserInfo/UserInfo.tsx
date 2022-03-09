import "./UserInfo.css";

interface UserInfoPropTypes {
  name: string;
  email: string;
  image: string;
}

function UserInfo({ name, email, image }: UserInfoPropTypes) {
  return (
    <>
      <div className="img-block">
        <img className="profile-photo" src={image} alt={"user"} />
      </div>
      <div className="content-block">
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>
    </>
  );
}

export default UserInfo;
