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
  width: 100%;
  color: black;
  margin: 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div``;

export default Restaurantes;
