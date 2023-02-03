import axios from "axios";
//import { setOrdersData } from "../Redux/Actions/action";

// export const getOrdersData = async (dispatch) => {
//   await axios
//     .get("http://localhost:8080/VerizonAct37/getOrders")
//     .then((data) => {
//       // console.log("Axios--", data);
//       dispatch(setOrdersData(data.data.Orders));
//     })
//     .catch((err) => console.error(err));
// };

export const getOrdersData = () => {
  console.log("Async call start<<<<");
  return axios
    .get("http://localhost:8080/VerizonAct37/getOrders")
    .then((data) => {
      console.log("Axios--", data);
      //dispatch(setOrdersData(data.data.Orders));
      return data.data.Orders;
    })
    .catch((err) => console.error(err));
};
