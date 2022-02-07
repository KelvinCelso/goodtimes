import React from "react";
import styled from "styled-components";
import Visit from "../home/places/Visit";
import ItemImages from "./ItemImages";
import ItemInfo from "./ItemInfo";
import Recomended from "./Recomended";
function DetailsCenter() {
  return (
    <Container>
      <Content>
        <ItemImages />
        <ItemInfo />
      </Content>
      <Recomended />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding-top: 80px;
`;

export default DetailsCenter;
