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
const Content = styled.div``;
const Header = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export default Restaurantes;
