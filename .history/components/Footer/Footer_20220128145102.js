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
      <span className="footer">
        Copyrights &copy; 2022. GoodTimes. All Rights Reserved.
      </span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  color: white;
  background-color: #111;
  position: relative;
  letter-spacing: 1px;
  height: 60vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;

  .footer {
    text-align: center;
    padding: 0 20px;
    bottom: 0px;
    background-color: #000;
    width: 100%;
  }
`;
const Content = styled.div`
  width: 100vw;
  display: flex;
  margin: 0px 40px;
`;

export default Footer;
