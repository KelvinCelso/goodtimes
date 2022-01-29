import React from "react";
import styled from "styled-components";
function Restaurantes() {
  return (
    <Container>
      <Content>
        <Header></Header>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div``;

export default Restaurantes;
