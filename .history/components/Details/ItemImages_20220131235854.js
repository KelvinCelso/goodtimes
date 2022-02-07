import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { imageState, itemState } from "../../atoms/ItemsAtoms";

function ItemImages(props) {
  const items = useRecoilValue(itemState);
  const [currentImage, setCurrentImage] = useState();
  return (
    <Container>
      <Content>
        <BigImage>
          <img className="bigImage" src={props.images} />
        </BigImage>
        <SmallImages>
          {props.allImages &&
            props.allImages.map((mag) => (
              <Small onClick={() => setCurrentImage}>
                <img className="smallImages" src={mag} />
              </Small>
            ))}
        </SmallImages>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  border-radius: 6px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5vw;
  background-color: transparent;
  backdrop-filter: blur(5px);
`;

const BigImage = styled.div`
  display: block;
  height: 60vh;
  width: 400px;
  border-radius: 6px;
  border: 1px solid white;

  .bigImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
  @media (max-width: 950px) {
    width: 350px;
  }
`;

const SmallImages = styled.div`
  display: flex;
  justify-content: space-between;

  width: 30vw;
  padding: 20px;
`;
const Small = styled.div`
  border: 1px solid white;
  width: 150px;
  height: 100px;
  .smallImages {
    width: 100%;
    height: 100%;
  }
  &:hover {
    border: 3px solid white;
    transform: scale(1.05);
    transition: all 300ms ease-out;
  }
`;
export default ItemImages;
