const INITIAL_STATE = {
  UserName: "",
  orders: [],
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_ORDERS_DATA":
      // console.log("reducer--", action.payload);
      return { ...state, orders: action.payload };
    case "SET_USER_INFO":
      // console.log("reducer--", action.payload);
      return { ...state, UserName: action.payload };
    case "SET_SIDEBAR_INFO":
      return { ...state, SideBarSelection: action.payload };
    //SET_SIDEBAR_INFO
    default:
      return state;
  }
};
