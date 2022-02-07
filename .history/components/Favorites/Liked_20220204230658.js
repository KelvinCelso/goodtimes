import React from "react";
import styled from "styled-components";
import Items from "./Items";

function Liked() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-right: 20px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export default Liked;
