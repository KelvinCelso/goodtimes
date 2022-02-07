import React from "react";
import styled from "styled-components";

function ItemInfo() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex-direction: column;
  background-color: rgb(209, 209, 209);
  border: 1px solid white;
  color: black;
`;

export default ItemInfo;
