import ProfileWidgetPresentation from "./ProfileWidgetPresentation.jsx";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Cookies from "js-cookie";

const ProfileWidgetLogic = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const tokenCookies = Cookies.get("token");
  const itemsUser = Cookies.get("user")
    ? JSON.parse(Cookies.get("user"))
    : null;


  let data = {
    isAuthenticated,
    logout,
    tokenCookies,
    itemsUser,
  };

  return <ProfileWidgetPresentation data={data} />;
};

export default ProfileWidgetLogic;
