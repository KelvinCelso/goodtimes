import React from "react";
import styled from "styled-components";
function Items(props) {
  return (
    <Container>
      <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Info>
        <h3>Name</h3>
        <p>address</p>
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
  /* padding: 20px; */
  padding: 20px 0px;
  width: 25vw;
  color: black;
  margin-right: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  img {
    object-fit: cover;
    max-width: 25vw;
    height: 200px;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
  }
  @media (min-width: 1080px) {
    /* width: 16vw; */
    width: 350px;
    img {
      object-fit: cover;
      /* max-width: 16vw; */
      max-width: 27vw;
      height: 250px;
    }
  }
  @media (max-width: 768px) {
    width: 90vw;
    margin-right: 0px;
    img {
      max-width: 90vw;
      height: 250px;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Items;
