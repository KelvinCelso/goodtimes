import React from "react";
import styled from "styled-components";

function ItemInfo() {
  return (
    <Container>
      <Content>
        <h1>Malony</h1>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 6px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  flex-direction: column;
  background-color: rgb(209, 209, 209);
  border: 1px solid white;
  color: black;
`;

export default ItemInfo;
