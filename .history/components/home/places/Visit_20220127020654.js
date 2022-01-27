import React from "react";
import styled from "styled-components";
function Visit() {
  return (
    <Container>
      <Content>
        <h1>Visite Também</h1>
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
  border-radius: 6px;
  height: 400px;
  width: 265px;
  img {
    width: 220px;
    height: 230px;
    border-radius: 6px;
    margin-bottom: 20px;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    &:hover {
    }
  }
  span {
    font-size: 18px;
  }
  &:hover {
  }
`;

export default Visit;
