import React from "react";
import styled from "styled-components";
function DetailsCenter() {
  return (
    <Container>
      <Content>Detail CenterS</Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: black;
  position: relative;
  top: 100px;
`;
const Content = styled.div``;

export default DetailsCenter;
