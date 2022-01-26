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

  padding: 0px 60px;
  position: absolute;
  background-color: gray;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;
const Content = styled.div`
  width: 100%;
`;
export default Places;
