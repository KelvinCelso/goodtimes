import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
export default function Home() {
  return (
    <Container>
      <SideMenu />
    </Container>
  );
}
const Container = styled.div`
  background-color: #f0f1f2;
  height: 100vh;
  width: 100vw;
`;
