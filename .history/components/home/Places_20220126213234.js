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

  width: 100vw;
  margin-top: 290px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (min-width: 1080px) {
    margin-top: 100px;
  }
`;
const Content = styled.div`
  width: 100%;
`;
export default Places;
