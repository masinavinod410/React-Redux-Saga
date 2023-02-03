import * as React from "react";
import Login from "./Components/LoginUI";
import DashboardContent from "./Components/Dashboard/Dashboard";
import Orders from "./Components/Orders/Orders";
import ShopDevices from "./Components/ShopDevices/ShopDevices";
import inventory from "./Components/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Store
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  //console.log("App.js");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/orders" component={Orders} />
          <Route path="/shopdevices" component={ShopDevices} />
          <Route path="/inventory" component={inventory} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
