import React from "react";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../app/store";
function restaurantes() {
  return (
    <Provider store={store}>
      <SideMenu />
    </Provider>
  );
}

export default restaurantes;
