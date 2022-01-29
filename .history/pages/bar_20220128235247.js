import React from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../app/store";
function bar() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
        <Footer />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
`;

export default bar;
