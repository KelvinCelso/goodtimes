import React from "react";
import styled from "styled-components";
import CatChoser from "./CatChoser";
import Restaurantes from "./Restaurantes";
function CenterCat() {
  return (
    <Container>
      <Img>
        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </Img>
      <Content>
        <CatChoser />
        <Restaurantes />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  color: white;
`;
const Img = styled.div`
  height: 300px;

  img {
    z-index: -1;
    width: 98.2vw;
    height: 70vh;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
  }
  @media (min-width: 1080px) {
    img {
      width: 100vw;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 96.6vw;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;

  background-color: transparent;
  justify-content: center;
  align-items: center;

  top: 180px;
  width: 100%;
  padding: 0px 30px;
  @media (max-width: 768px) {
    top: 100px;
    padding: 0px 20px;
  }
`;
export default CenterCat;
