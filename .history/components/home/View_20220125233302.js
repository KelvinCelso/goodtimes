import React from "react";
import styled from "styled-components";
function View() {
  return (
    <Container>
      <Content>
        <Wrap>
          <h1>Restaurantes</h1>
          <img src="https://i.imgur.com/2ZZfFQb.jpeg"></img>
        </Wrap>
        <Wrap>
          <h1>Bar</h1>
        </Wrap>
        <Wrap>
          <h1>Entretenimento</h1>
        </Wrap>
        <Wrap>
          <h1>Estilo</h1>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  left: 0;
  right: 0;
  top: 650px;
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

  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 820px) {
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
  width: 290px;
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
    color: red;
  }
  @media (max-width: 1280px) {
    width: 210px;
    height: 180px;
  }

  @media (max-width: 550px) {
    width: 165px;
    height: 175px;
    font-size: 0.8em;
  }

  h1 {
    z-index: 1;
  }
  img {
    inset: 0px;
    height: 100%;
    display: block;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: -11;
    top: 0;
    width: 100%;
  }
`;

export default View;
