import React from "react";
import styled from "styled-components";
function Restaurantes() {
  return (
    <Container>
      <Content>Restaurante</Content>
    </Container>
  );
}

const Container = styled`
  display: flex;
  width: 100%;
`;
const Content = styled`
  display: flex;
  top: 60px;
  background-color: red;
  height: 50vh;
  
`;

export default Restaurantes;
