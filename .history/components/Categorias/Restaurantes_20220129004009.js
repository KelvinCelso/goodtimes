import React from "react";
import styled from "styled-components";
function Restaurantes() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Restaurantes</h1>
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
const Header = styled.div``;

export default Restaurantes;
