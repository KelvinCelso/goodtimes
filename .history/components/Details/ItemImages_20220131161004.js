import React from "react";
import styled from "styled-components";

function ItemImages() {
  return (
    <Container>
      <Content>
        <BigImage></BigImage>
        <SmallImages></SmallImages>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Content = styled.div``;

const BigImage = styled.div``;
const SmallImages = styled.div``;
export default ItemImages;
