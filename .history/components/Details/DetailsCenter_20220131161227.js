import React from "react";
import styled from "styled-components";
import ItemImages from "./ItemImages";
import ItemInfo from "./ItemInfo";
function DetailsCenter() {
  return (
    <Container>
      <Content>
        <ItemImages />
        <ItemInfo />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: black;
  color: white;
  z-index: 1;
  top: 100px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export default DetailsCenter;
