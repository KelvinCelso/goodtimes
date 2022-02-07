import React from "react";
import styled from "styled-components";

function ItemImages() {
  return (
    <Container>
      <Content>
        <BigImage>
          <img
            className="bigImage"
            src="https://lh3.googleusercontent.com/DLEjpo2RyGoURtP2Ji5g_rfydqPs7oLZf_tCyKLWWDmIgSv38_dKDNB6ti3dwDmfAyZ01BOM=w1080-h608-p-no-v0"
          />
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
  width: 550px;
  margin-right: 20vw;
  border: 1px solid white;

  .bigImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const SmallImages = styled.div``;
export default ItemImages;
