import React from "react";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../app/store";
import styled from "styled-components";
import CenterCat from "../components/categorias/CenterCat";
function categorias() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
        <CenterCat />
        {/* <Footer /> */}
      </Container>
    </Provider>
  );
}
const Container = styled.div`
  background-color: black;
  height: 100vh;
`;
export default categorias;
