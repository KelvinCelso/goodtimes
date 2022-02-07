import React from "react";
import styled from "styled-components";

function Items() {
  return (
    <Container>
      <Content>
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipPcKEsybnZaktX9sP1LjBQAHBmfB0-L8yqOWoAg=w408-h272-k-no"
          alt=""
        ></img>

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
  background-color: white;
  color: #000;
  width: 370px;
  height: 90px;
  border-radius: 6px;
  margin-bottom: 10px;

  padding: 10px;
  h2 {
    padding: 0px;
    margin: 0px;
  }
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const Title = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  background-color: red;
`;

export default Items;
