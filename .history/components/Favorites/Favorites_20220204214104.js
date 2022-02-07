import React from "react";
import styled from "styled-components";

function Favorites() {
  return (
    <Container>
      <Content>Fucking Favorites</Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: black;
`;
export default Favorites;
