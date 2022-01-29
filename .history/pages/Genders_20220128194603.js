import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "../app/store";

function Genders() {
  return (
    <Provider store={store}>
      <Container>This is The Genders Page</Container>
    </Provider>
  );
}
const Container = styled.div``;

export default Genders;
