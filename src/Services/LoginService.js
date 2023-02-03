import axios from "axios";
import { setUserInfo } from "../Redux/Actions/action";

export const getUserStatus = async (usrNm, pswd, dispatch) => {
  await axios
    .post("http://localhost:8080/VerizonAct37/getUserInfo", {
      userName: usrNm,
      password: pswd,
    })
    .then((response) => {
      //console.log("Axios user--", response);
      //console.log("Axios user--", response.status);
      //console.log("Axios user--", response.status === 200);
      if (response.status === 200) {
        console.log("auth call<<<<<<<<<<<<<<<<");
        dispatch(setUserInfo(response.data));
        // navigate("/dashboard");
      }
    })
    .catch((err) => console.error(err));
};
