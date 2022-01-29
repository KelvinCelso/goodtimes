import React from "react";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../app/store";
import styled from "styled-components";
function restaurantes() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
      </Container>
    </Provider>
  );
}
const Container = styled.div`
background-color: black;
`;
export default restaurantes;
