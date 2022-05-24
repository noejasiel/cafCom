import { createContext } from "react";
import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const data = "valorrr";
  // const [warning, setWarning] = useState(true);
  // const navigate = useNavigate();

  // const handleSendLogin = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:8888/DBCafe/select.php/user/login", inputs)
  //     .then((response) => {
  //       console.log(response.data);
  //       if (!response.data) {
  //         setWarning(false);
  //         navigate("/Dashboard", { replace: true });
  //       } else {
  //         setWarning(true);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(inputs);
  //   if (passRef.current.value != null || usrRef.current.value != null) {
  //     setWarning(false);
  //   }
  // };
  // const handleSendLogin = (e) => {
  //   e.preventDefault();
  //   alert("desde context");
  // };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export { UserProvider };
export default UserContext;
