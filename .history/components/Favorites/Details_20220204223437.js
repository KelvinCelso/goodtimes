import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Content>Mf Details</Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

export default Details;
