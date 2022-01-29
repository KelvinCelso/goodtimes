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
  padding: 40px;
  display: flex;
  color: white;
  background-color: black;
  height: 50vh;
  width: 100vw;
  flex-direction: column;
`;
const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Footer;
