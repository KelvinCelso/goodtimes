import React from "react";
import styled from "styled-components";

function Items() {
  return (
    <Container>
      <Content>
        <img src="" alt=""></img>
        <Title>
          <h2>South Beach</h2>
          <p>Horario</p>
        </Title>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: white;
  width: 350px;
  height: 100px;
  border-radius: 4px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  background-color: red;
`;

export default Items;
