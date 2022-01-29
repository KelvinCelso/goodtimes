import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
import Center from "../components/home/Center";
import { Provider } from "react-redux";
import store from "../app/store";

export default function Home() {
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
        <SideMenu />
        <Center />
        <Footer />
      </Container>
    </Provider>
  );
}
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;
