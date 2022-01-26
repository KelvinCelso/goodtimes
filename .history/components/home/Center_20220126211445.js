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
      </MenuContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuContainer = styled.div`
  @media (max-width: 768px) {
  }
`;

export default Center;
