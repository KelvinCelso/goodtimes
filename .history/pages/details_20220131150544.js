import styled from "styled-components";
import DetailsCenter from "../components/Details/DetailsCenter";
import { Provider } from "react-redux";
import store from "../app/store";
import Head from "next/head";
function details() {
  return (
    <Provider store={store}>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Container>
        <DetailsCenter />
      </Container>
    </Provider>
  );
}

const Container = styled.div``;

export default details;
