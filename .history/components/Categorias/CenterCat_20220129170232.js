import React from "react";
import styled from "styled-components";
import CatChoser from "./CatChoser";
import Restaurantes from "./Restaurantes";
function CenterCat() {
  let restaurantes = [];
  let estilos = [];
  let bars = [];
  let diversaos;

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
  overflow-x: hidden;
`;
const Img = styled.div`
  height: 300px;

  img {
    z-index: -1;
    width: 100vw;
    height: 70vh;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 30px;
  @media (max-width: 768px) {
    padding: 0px 0px;
    width: 100vw;
  }
`;
export default CenterCat;
