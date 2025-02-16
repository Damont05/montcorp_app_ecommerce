import Cookies from "js-cookie";
import ProfilePresentation from "./ProfilePresentation";
import { useState } from "react";
import { countries } from "../../../apis/Countries";

const ProfileLogic = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    const country = countries.find((c) => c.code === selectedCode);
    setSelectedCountry(country);
  };

  let data = {
    isEditing,
    setIsEditing,
    userData,
    selectedCountry,
    handleCountryChange,
    countries,
  };
  return <ProfilePresentation data={data} />;
};

export default ProfileLogic;
