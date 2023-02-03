const setOrdersData = (data) => {
  console.log("Action--", data);
  return {
    type: "SET_ORDERS_DATA",
    payload: data,
  };
};

const setUserInfo = (data) => {
  //console.log("Action--", data);
  return {
    type: "SET_USER_INFO",
    payload: data,
  };
};

const sideBarSelection = (data) => {
  //console.log("Action--", data);
  return {
    type: "SET_SIDEBAR_INFO",
    payload: data,
  };
};
export { setOrdersData, setUserInfo, sideBarSelection };
