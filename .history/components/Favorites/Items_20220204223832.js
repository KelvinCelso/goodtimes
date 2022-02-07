import React from "react";
import styled from "styled-components";

function Items() {
  return (
    <Container>
      <Content>
        <img src="" alt=""></img>
        <h2>South Beach</h2>
        <p>Horario</p>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export default Items;
