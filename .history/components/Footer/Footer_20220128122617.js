import React from "react";
import styled from "styled-components";
import About from "./About";
import Inquire from "./Inquire";

function Footer(props) {
  return (
    <Container>
      <Content>
        <About />
        <Inquire />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  color: white;
  background-color: black;
  position: relative;
  letter-spacing: 1px;
  height: 60vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;

  span {
    position: absolute;
    bottom: 0px;
  }
`;
const Content = styled.div`
  width: 100vw;
  display: flex;

  margin: 0px 40px;
`;

export default Footer;