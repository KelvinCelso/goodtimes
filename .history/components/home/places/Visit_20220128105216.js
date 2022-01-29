import React from "react";
import styled from "styled-components";
function Visit(props) {
  return (
    <Container>
      <Content>
        <Wrap>
          <img src={props.image} />
          <span>{props.name}</span>
          <p>{props.address}</p>
        </Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 25px;
  border-radius: 6px;
  height: 400px;
  width: 265px;
  margin-bottom: 20px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(219, 219, 219, 0.8);
  box-shadow: rgb(0 0 0/ 69%) 0px 16px 20px -10px,
    rgb(0 0 0 / 73%) 0px 9px 5px -10px;

  &:hover {
    box-shadow: rgb(0 0 0/ 73%) 0px 24px 30px -16px,
      rgb(0 0 0 / 72%) 0px 25px 17px -10px;
    transform: scale(1.05);
  }
  img {
    width: 220px;
    height: 230px;
    border-radius: 6px;
    margin-bottom: 20px;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 5);
  }
  span {
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    height: 45vh;
    width: 46vw;
    margin-bottom: 30px;
    margin-right: 0px;
    padding: 0px;

    img {
      width: 150px;
      height: 200px;
    }
  }
`;

export default Visit;
