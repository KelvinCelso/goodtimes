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
  border: 1px solid white;

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

  width: 30vw;
  padding: 20px;
`;
const Small = styled.div`
  border: 1px solid white;
  width: 150px;
  height: 100px;
  margin-right: 10px;
  .smallImages {
    width: 100%;
    height: 100%;
  }
  border-radius: 3px;
  transition: all 300ms ease;
  &:hover {
    border: 3px solid white;
    transform: scale(1.05);
  }
`;
export default ItemImages;
