import React from "react";
import styled from "styled-components";

function ItemInfo() {
  return (
    <Container>
      <Content>infoooo</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex-direction: column;
  background-color: black;
  border: 1px solid white;
`;

export default ItemInfo;
