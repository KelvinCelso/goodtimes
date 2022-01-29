import React from "react";
import styled from "styled-components";
function Restaurantes() {
  return (
    <Container>
      <Content>Restaurante</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Content = styled.div`
  display: flex;

  background-color: red;
  justify-content: center;
`;

export default Restaurantes;
