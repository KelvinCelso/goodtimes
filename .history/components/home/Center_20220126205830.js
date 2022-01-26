import React from "react";
import styled from "styled-components";
import Highlights from "./Highlights";
import Places from "./Places";
import View from "./View";

function Center() {
  return (
    <Container>
      <Highlights />
      <MenuContainer>
        <View />
        <Places />
      </MenuContainer>
    </Container>
  );
}
const Container = styled.div``;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;

export default Center;
