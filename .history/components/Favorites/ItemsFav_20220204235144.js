import React from "react";
import styled from "styled-components";

function Items() {
  return (
    <Container>
      <Content>
        <img
          src="https://lh3.googleusercontent.com/DLEjpo2RyGoURtP2Ji5g_rfydqPs7oLZf_tCyKLWWDmIgSv38_dKDNB6ti3dwDmfAyZ01BOM=w1080-h608-p-no-v0"
          alt="Favoto"
        />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: white;
  color: #000;
  width: 370px;
  height: 90px;
  border-radius: 6px;
  margin-bottom: 10px;

  /* padding: 10px; */

  h2 {
    padding: 0px;
    margin: 0px;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const Title = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  background-color: red;
`;

export default Items;
