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
  width: 100%;
  overflow: hidden;

  z-index: -1;
`;
