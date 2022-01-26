import styled from "styled-components";
import React from "react";

function Places() {
  return (
    <Container>
      <Content>
        <h1>Visite</h1>
      </Content>
    </Container>
  );
}

const Container = styled.div`
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
  display: flex;
`;
export default Places;
