import React from "react";
import styled from "styled-components";
function View() {
  return (
    <Container>
      <Content>
        <Wrap>
          <h1>Restaurantes</h1>
        </Wrap>
        <Wrap>
          <h1>Restaurantes</h1>
        </Wrap>
        <Wrap>
          <h1>Restaurantes</h1>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  left: 0;
  top: 710px;
  position: absolute;
  justify-content: center;
  width: 100vw;

  display: flex;
`;
const Content = styled.div`
  align-items: center;
  width: 100%;
  grid-gap: 25px;
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  justify-content: center;
  border: 2px solid black;
  display: flex;
  border-radius: 6px;
  height: 200px;
  max-width: 400px;

  align-items: center;
`;

export default View;
