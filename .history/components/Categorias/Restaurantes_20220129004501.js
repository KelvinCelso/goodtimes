import React from "react";
import styled from "styled-components";
function Restaurantes() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Restaurantes</h1>
          <input placeholder="search"></input>
        </Header>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: white;
  color: black;
  margin: 20px;
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export default Restaurantes;
