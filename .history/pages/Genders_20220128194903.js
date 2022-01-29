import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "../app/store";
import Head from "next/head";
import SideMenu from "../components/SideMenu";
function genders() {
  return (
    <Provider store={store}>
      <Head>
        <title>generos</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Container>
        <SideMenu />
      </Container>
    </Provider>
  );
}
const Container = styled.div``;

export default genders;
