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
            <img
              cl
              className="smallImages"
              src="https://www.100makas.com/sites/default/files/styles/business-list/public/photos/bp_malony_view.jpg?itok=z4k3daF8"
            />
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
  margin-right: 10vw;
  background-color: transparent;
  backdrop-filter: blur(5px);
`;

const BigImage = styled.div`
  display: block;
  height: 60vh;
  width: 30vw;

  border: 1px solid white;

  .bigImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SmallImages = styled.div`
  display: flex;
  justify-content: space-between;

  width: 30vw;
  padding: 20px;
`;
const Small = styled.div`
  border: 3px solid white;
  width: 150px;
  height: 100px;
  .smallImages {
    width: 100%;
    height: 100%;
  }
`;
export default ItemImages;
