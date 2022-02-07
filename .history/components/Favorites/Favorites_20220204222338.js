import React from "react";
import styled from "styled-components";

function Favorites() {
  return (
    <Container>
      <Content>{/* <Head></Head> */}</Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 1;
  width: 100vw;
`;
const Head = styled.div`
  display: black;
  height: 70px;
  width: 100vw;
  background-color: black;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 800px) {
    display: grid;
    align-items: center;
    justify-items: center;

    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
export default Favorites;
