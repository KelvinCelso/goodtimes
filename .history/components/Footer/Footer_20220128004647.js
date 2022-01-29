import React from "react";
import styled from "styled-components";
import About from "./About";

function Footer(props) {
  return (
    <Container>
      <Content>
        <About />
        <Inquir />
        <span>Copyright 2022. Nercio. All Rights Reserved.</span>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  color: white;
  background-color: black;
  height: 50vh;
`;
const Content = styled.div``;

export default Footer;
