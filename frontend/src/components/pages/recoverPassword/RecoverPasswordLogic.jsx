import { useState } from "react";
import RecoverPassword from "./RecoverPassword.jsx";

const RecoverPasswordLogic = () => {
  const [required, setRequired] = useState(false);

  const handleRequired = () => {
    setRequired(!required);
  };

  let data = { required, handleRequired };
  return (
    <>
      <RecoverPassword data={data} />
    </>
  );
};

export default RecoverPasswordLogic;
