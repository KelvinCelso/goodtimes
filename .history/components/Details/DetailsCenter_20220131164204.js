import React from "react";
import styled from "styled-components";
import Visit from "../home/places/Visit";
import ItemImages from "./ItemImages";
import ItemInfo from "./ItemInfo";
function DetailsCenter() {
  return (
    <Container>
      <Content>
        <ItemImages />
        <ItemInfo />
        <Visit />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  color: white;
  z-index: 1;
  top: 100px;
  width: 100vw;
  margin-top: 80px;
  margin-bottom: 80px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default DetailsCenter;
