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
        <Footer />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
`;

export default favorites;
