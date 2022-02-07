import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { imageState, itemState } from "../../atoms/ItemsAtoms";

function ItemImages(props) {
  const items = useRecoilValue(itemState);
  const [currentImage, setCurrentImage] = useState(props.allImages?.[0]);
  useEffect(() => {
    setCurrentImage(props.allImages?.[0]);
  }, [props.allImages]);

  return (
    <Container>
      <Content>
        <BigImage>
          <img className="bigImage" src={currentImage} />
        </BigImage>
        <SmallImages>
          {props.allImages &&
            props.allImages.map((mag) => (
              <Small onClick={() => setCurrentImage(mag)}>
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
  background-color: transparent;
  justify-content: center;
  backdrop-filter: blur(5px);
  margin-right: 3vw;

  @media (max-width: 950px) {
    margin-right: 2vw;
  }
  @media (max-width: 800px) {
    margin-right: 0px;
  }
`;

const BigImage = styled.div`
  display: block;
  height: 60vh;
  width: 600px;
  border-radius: 6px;
  justify-content: center;
  border: 1px solid white;
  box-shadow: 20px 20px 20px black;

  .bigImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
  @media (max-width: 1070px) {
    width: 50vw;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;

const SmallImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 600px;
  padding: 20px;
  @media (max-width: 1070px) {
    width: 50vw;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;
const Small = styled.div`
  border: 2px solid #000;
  width: 150px;
  height: 100px;
  margin-right: 10px;
  border-radius: 4px;
  .smallImages {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  border-radius: 3px;
  box-shadow: rgb(0 0 0/ 69%) 0px 16px 20px -10px,
    rgb(0 0 0 / 73%) 0px 9px 5px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0/ 73%) 0px 20px 26px -16px,
      rgb(0 0 0 / 72%) 0px 21px 13px -10px;
  }
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
`;
export default ItemImages;
