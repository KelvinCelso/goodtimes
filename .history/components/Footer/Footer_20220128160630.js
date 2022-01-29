import React from "react";
import styled from "styled-components";
import About from "./About";
import Inquire from "./Inquire";

function Footer(props) {
  return (
    <Container>
      <Content>
        <Wrap>
          <About />
        </Wrap>
        <Wrap>
          <Inquire />
        </Wrap>
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
  width: 100vw;
  flex-direction: column;
  align-items: center;

  .footer {
    text-align: center;
    padding: 20px 0px;

    margin-top: 20px;
    bottom: 0px;
    background-color: #000;
    width: 100%;
  }
`;
const Content = styled.div`
  width: 100vw;
  display: flex;
  margin: 0px 40px;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Footer;
