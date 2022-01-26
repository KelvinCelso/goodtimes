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

  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 300px;
  }
`;
const Content = styled.div`
  width: 100%;
`;
export default Places;
