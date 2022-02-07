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
        <SmallImages>
          <Small>
            <img />
          </Small>
          <Small>
            <img />
          </Small>
          <Small>
            <img />
          </Small>
        </SmallImages>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigImage = styled.div`
  display: block;
  height: 60vh;
  width: 30vw;
  margin-right: 10vw;
  border: 1px solid white;

  .bigImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Small = styled.div``;
const SmallImages = styled.div`
  display: flex;
`;
export default ItemImages;
