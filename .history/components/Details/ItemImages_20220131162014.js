import React from "react";
import styled from "styled-components";

function ItemImages() {
  return (
    <Container>
      <Content>
        <BigImage>
          <img src="https://www.100makas.com/sites/default/files/styles/business-list/public/photos/bp_malony_view.jpg?itok=z4k3daF8" />
        </BigImage>
        <SmallImages></SmallImages>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Content = styled.div``;

const BigImage = styled.div`
  display: block;
  height: 500px;
  width: 600px;
  margin-right: 20vw;
  border: 1px solid white;
`;
const SmallImages = styled.div``;
export default ItemImages;
