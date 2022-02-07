import styled from "styled-components";
import DetailsCenter from "../components/Details/DetailsCenter";
import { Provider } from "react-redux";
import store from "../app/store";
import Head from "next/head";
import SideMenu from "../components/SideMenu";
function details() {
  return (
    <Provider store={store}>
      <Head>
        <title>Details</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Container>
        <SideMenu />
        <DetailsCenter />
      </Container>
    </Provider>
  );
}

const Container = styled.div``;

export default details;
