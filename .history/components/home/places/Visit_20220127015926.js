import React from "react";
import styled from "styled-components";
function Visit() {
  return (
    <Container>
      <Wrap>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
          alt="frooties"
        />
        <span>Frooties Moçambique</span>
        <p>Av. Mao Tse Tung, Maputo</p>
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  margin: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
  border-radius: 6px;
  height: 400px;
  img {
    width: 220px;
    height: 200px;
    margin-bottom: 20px;
  }
  span {
    font-size: 18px;
  }
  &:hover {
    background: rgb(224, 61, 78);
    color: white;
  }
`;

export default Visit;
