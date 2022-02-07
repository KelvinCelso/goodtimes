import styled from "styled-components";
import DetailsCenter from "../../components/Details/DetailsCenter";
import { Provider } from "react-redux";
import store from "../../app/store";
import Head from "next/head";
import SideMenu from "../../components/SideMenu";
import { db } from "../../firebase";
import { GetServerSideProps } from "next";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";

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

const Container = styled.div`
  width: 100%;
  height: 100;
  overflow: hidden;
  z-index: -1;
  background-color: black;
`;

export default details;
