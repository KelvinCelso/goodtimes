import React from "react";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../app/store";
import styled from "styled-components";
import Favorites from "../components/Favorites/Favorites";

function favorites() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
        <Favorites />
        {/* <Footer /> */}
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  display: flex;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: -1;
`;

export default favorites;
