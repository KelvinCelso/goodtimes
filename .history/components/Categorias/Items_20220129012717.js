import React from "react";
import styled from "styled-components";
function Items(props) {
  return (
    <Container>
      <img src="https://previews.123rf.com/images/lmv/lmv1803/lmv180303510/97066967-blurred-restaurant-or-cafe-background-tables-and-chairs-in-the-lobby-of-the-mall-visitors-to-the-res.jpg" />
      <Info>
        <h3>Name</h3>
        <p>address</p>
        <a>Ver Mais</a>
      </Info>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  width: 25vw;
  color: black;

  img {
    object-fit: contain;
    max-width: 20vw;
    height: 200px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Items;
