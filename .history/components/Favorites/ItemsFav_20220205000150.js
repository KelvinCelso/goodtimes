import React from "react";
import styled from "styled-components";
import Link from "next/link";
function Items() {
  return (
    <Container>
      <Content>
        <img
          src="https://lh3.googleusercontent.com/DLEjpo2RyGoURtP2Ji5g_rfydqPs7oLZf_tCyKLWWDmIgSv38_dKDNB6ti3dwDmfAyZ01BOM=w1080-h608-p-no-v0"
          alt="Favoto"
        />
        <Title>
          <Link href="">Malony</Link>
          <p>Horario</p>
        </Title>
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
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  img {
    object-fit: cover;
    width: 150px;
    height: 100%;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }
`;
const Title = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  background-color: red;
  padding: 10px;

  a {
    h2 {
      padding: 0px;
      margin: 0px;
    }
  }
  p {
    padding: 0px;
    margin: 0px;
  }
`;

export default Items;
