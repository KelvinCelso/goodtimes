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
  height: 200px;
  position: relative;
`;
const Img = styled.div`
  height: 300px;
  z-index: -1;
  img {
    width: 90vw;
    height: 70vh;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
  }
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  background-color: red;
  top: 180px;
  width: 100%;
  padding: 0px 30px;
  @media (max-width: 768px) {
    top: 100px;
  }
`;
export default CenterCat;
