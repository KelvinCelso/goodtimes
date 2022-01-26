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
          <h1>Bar</h1>
        </Wrap>
        <Wrap>
          <h1>Entretenimento</h1>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  left: 0;
  right: 0;
  top: 710px;
  position: absolute;
  justify-content: center;
  width: 100vw;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    top: 410px;
  }
`;
const Content = styled.div`
  justify-items: center;
  width: 100vw;
  display: grid;
  margin: 0px 20px;
  grid-gap: 25px;
  gap: 25px;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  justify-content: center;
  border: 2px solid black;
  display: flex;
  border-radius: 6px;
  height: 220px;
  padding: 20px;
  min-width: 340px;
  max-width: 360px;
  align-items: center;
  backdrop-filter: blur(5px);

  cursor: pointer;
  box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  &:hover {
    box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scaleX(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    color: red;
  }
`;

export default View;
