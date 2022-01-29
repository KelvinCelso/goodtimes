import React from "react";
import styled from "styled-components";
function Items(props) {
  return (
    <Container>
      <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Info>
        <h2>Name</h2>
        <p>address</p>
        <a>Ver Mais</a>
      </Info>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 20px;
  width: 30vw;
  img {
    object-fit: contain;
    max-width: 20vw;
  }
`;

export default Items;
