import React from "react";
import styled from "styled-components";
import ItemsFav from "./ItemsFav";

function Liked() {
  return (
    <Container>
      <Content>
        <ItemsFav />
        <ItemsFav />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-right: 30px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export default Liked;
