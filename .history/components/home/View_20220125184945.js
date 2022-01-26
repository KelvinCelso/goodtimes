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

  padding: 0px 20px;
`;
const Content = styled.div`
  align-items: center;
  grid-gap: 25px;
  gap: 25px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Wrap = styled.div`
  justify-content: center;
  border: 2px solid black;

  border-radius: 6px;
  height: 200px;

  align-items: center;
`;

export default View;
