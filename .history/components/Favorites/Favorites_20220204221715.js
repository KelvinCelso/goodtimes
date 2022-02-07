import React from "react";
import styled from "styled-components";

function Favorites() {
  return (
    <Container>
      <Content>
        <Head></Head>
        Fucking Favorites
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Head = styled.div`
  display: black;
  height: 70px;
  width: 100vw;
  background-color: black;
`;
const Content = styled.div`
  display: flex;
  height: 200px;
  width: 100vw;
`;
export default Favorites;
