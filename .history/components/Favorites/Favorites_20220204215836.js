import React from "react";
import styled from "styled-components";

function Favorites() {
  return (
    <Container>
      <Head></Head>
      <Content>Fucking Favorites</Content>
    </Container>
  );
}
const Head = styled.div`
  display: flex;
  background-color: black;
`;
const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export default Favorites;
