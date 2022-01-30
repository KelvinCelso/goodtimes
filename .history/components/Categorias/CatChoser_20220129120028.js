import React from "react";
import styled from "styled-components";
function CatChoser() {
  return (
    <Container>
      <Content>
        <Wrap>
          <a href="#">Bar</a>
        </Wrap>
        <Wrap>
          <a href="#">Diversão</a>
        </Wrap>
        <Wrap>
          <a href="#">Estilo</a>
        </Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`;
const Content = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: grid;
    grid-gap: 25px;
    gap: 25px;
  }
`;

const Wrap = styled.div`
  display: flex;
  background-color: whitesmoke;
  margin: 10px;
  border: 2px solid gray;
  border-radius: 6px;
  width: 17vw;
  height: 50px;
  transition: all 0.3s ease;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  a {
    color: black;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;
  }
  img {
    opacity: 0;
    inset: 0px;
    height: 100%;
    display: block;
    object-fit: cover;
    position: absolute;

    transition: opacity 500ms ease-in-out 0s;
    z-index: -11;
    top: 0;
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
    img {
      opacity: 1;
      border-radius: 6px;
    }
  }
  @media (max-width: 768px) {
    width: 200px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default CatChoser;
