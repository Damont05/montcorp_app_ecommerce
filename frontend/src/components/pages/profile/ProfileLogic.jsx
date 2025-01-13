import Cookies from "js-cookie";
import ProfilePresentation from "./ProfilePresentation";

const ProfileLogic = () => {
  const userDataString = Cookies.get("user");
  let userData = "";
  if (userDataString) {
    userData = JSON.parse(userDataString);
  }
  return <ProfilePresentation userData={userData} />;
};

export default ProfileLogic;
