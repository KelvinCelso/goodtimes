import React from "react";
import styled from "styled-components";
function Items(props) {
  return (
    <Container>
      <img src={props.image} />
      <Content>
        <Info>
          <h3>
            <a href="">{props.name}</a>
          </h3>
          <p>address</p>
          {/* <a>Ver Mais</a> */}
        </Info>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: white;
  margin-top: 20px;
  /* padding: 20px; */
  width: 25vw;
  color: black;
  margin-right: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  img {
    object-fit: cover;
    max-width: 25vw;
    height: 200px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
  }
  @media (min-width: 1210px) {
    /* width: 16vw; */
    width: 350px;
    height: 200px; /* */
    img {
      object-fit: cover;
      /* max-width: 16vw; */
      max-width: 30vw;
      /* height: 250px; */
      height: 200px;
    }
  }
  @media (max-width: 1210px) {
    width: 75vw;
    margin-right: 0px;
    margin-left: 0px;
    img {
      max-width: 75vw;
      height: 250px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  margin-left: 5px;
  h3 {
    margin-bottom: 0px;
    a {
      text-decoration: none;

      color: black;
      transition: all 0.3s ease;
      &:hover {
        color: #e03d4e;
      }
    }
  }
  p {
  }
`;

export default Items;
