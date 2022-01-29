import React from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer/Footer";
function bar() {
  return (
    <Container>
      <SideMenu />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
`;

export default bar;
