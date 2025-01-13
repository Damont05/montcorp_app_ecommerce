import { useContext, useEffect, useState } from "react";
import NavbarPresentation from "./NavbarPresentation";
import { ProductsContext } from "../../../context/ProductsContext";

const NavbarLogic = () => {
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const { setFilteredProduct } = useContext(ProductsContext);

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search !== "") {
      setFilteredProduct({ key: "name", value: search });
    } else {
      setFilteredProduct({ key: "", value: "" });
    }
  }, [search]);

  let data = {
    search,
    focused,
    setFocused,
    handleSearch,
  };
  return <NavbarPresentation data={data} />;
};

export default NavbarLogic;
