import React from "react";
import styled from "styled-components";
function DetailsCenter() {
  return (
    <Container>
      <Content>Detail Centers</Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  background-color: black;
  color: white;
  z-index: 1;
  top: 100px;
`;
const Content = styled.div``;

export default DetailsCenter;
