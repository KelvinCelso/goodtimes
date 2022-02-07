import React from "react";
import styled from "styled-components";
import Items from "./Items";

function Liked() {
  return (
    <Container>
      <Content>
        <Items />
      </Content>
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

export default Liked;
