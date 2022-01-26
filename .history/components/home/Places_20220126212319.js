import styled from "styled-components";
import React from "react";

function Places() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
  width: 100vw;
  position: absolute;

  overflow: hidden;
  @media (max-width: 768px) {
  }
`;
const Content = styled.div`
  width: 100%;
`;
export default Places;
