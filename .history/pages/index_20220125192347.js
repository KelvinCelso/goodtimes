import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import styled from "styled-components";
import Center from "../components/home/Center";
import { Provider } from "react-redux";
import store from "../app/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
        <Center />
      </Container>
    </Provider>
  );
}
const Container = styled.div`
  background-color: #115d8c;
  height: 100vh;
  width: 100vw;
`;
