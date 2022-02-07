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

const Container = styled.div`
  display: flex;
`;
const Head = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: black;
`;
const Content = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export default Favorites;
