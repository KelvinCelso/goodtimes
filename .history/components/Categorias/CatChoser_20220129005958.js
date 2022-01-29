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
`;
const Content = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  display: flex;
  margin: 10px;
  border: 2px solid #fff;
  border-radius: 6px;
  width: 17vw;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 5px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default CatChoser;
