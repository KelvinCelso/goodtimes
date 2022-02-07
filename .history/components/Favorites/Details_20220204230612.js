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
  width: 600px;
  height: 600px;
  display: flex;
  border-radius: 6px;
`;

export default Details;
