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
  margin-right: 10px;
  img {
    object-fit: cover;
    max-width: 20vw;
    height: 200px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Items;
