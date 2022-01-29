import React from "react";
import styled from "styled-components";
function Visit() {
  return (
    <Container>
      <h1>Visite Também</h1>
      <Content>
        <Wrap>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
            alt="frooties"
          />
          <span>Frooties Moçambique</span>
          <p>Av. Mao Tse Tung, Maputo</p>
        </Wrap>
        <Wrap>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
            alt="frooties"
          />
          <span>Frooties Moçambique</span>
          <p>Av. Mao Tse Tung, Maputo</p>
        </Wrap>
        <Wrap>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
            alt="frooties"
          />
          <span>Frooties Moçambique</span>
          <p>Av. Mao Tse Tung, Maputo</p>
        </Wrap>
        <Wrap>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
            alt="frooties"
          />
          <span>Frooties Moçambique</span>
          <p>Av. Mao Tse Tung, Maputo</p>
        </Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  margin: 40px;
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
  border: 2px solid black;
  padding: 20px;
  margin-right: 25px;
  border-radius: 6px;
  height: 400px;
  width: 265px;
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
  }

  @media (max-width: 768px) {
    height: 400px;
    width: 195px;
    margin-bottom: 30px;
    margin-right: 15px;
    img {
      width: 140px;
      height: 200px;
    }
  }
`;

export default Visit;
