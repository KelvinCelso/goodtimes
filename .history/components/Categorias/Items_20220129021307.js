import React from "react";
import styled from "styled-components";
function Items(props) {
  return (
    <Container>
      <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
  margin-right: 20px;
  border-radius: 4px;
  img {
    object-fit: cover;
    max-width: 20vw;
    height: 200px;
  }
  @media (min-width: 1080px) {
    width: 18vw;
    img {
      object-fit: cover;
      max-width: 16vw;
      height: 250px;
    }
  }
  @media (max-width: 768px) {
    width: 90vw;
    padding: 20px;
    margin-right: 0px;
    img {
      max-width: 100vw;
      height: 250px;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Items;
