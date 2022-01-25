import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import styled from "styled-components";

import { Provider } from "react-redux";
import store from "./app/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
      </Container>
    </Provider>
  );
}
const Container = styled.div`
  background-color: #f0f1f2;
  height: 100vh;
  width: 100vw;
`;
