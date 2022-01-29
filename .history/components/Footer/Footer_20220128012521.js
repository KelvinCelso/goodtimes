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
      <span>Copyrights &copy; 2022. GoodTimes. All Rights Reserved.</span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  color: white;
  background-color: black;
  height: 60vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
`;

export default Footer;
