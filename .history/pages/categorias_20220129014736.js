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
      </Container>
      <footer>
        <Footer />
      </footer>
    </Provider>
  );
}
const Container = styled.div`
  background-color: black;
`;
export default categorias;
