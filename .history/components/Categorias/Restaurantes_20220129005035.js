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
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h1 {
    font-size: 1.3em;
  }
`;

export default Restaurantes;
