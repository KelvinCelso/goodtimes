import React from "react";
import styled from "styled-components";

function Advertise() {
  return (
    <Container>
      <Content>
        <img
          src="https://ckr.co.za/pieces/projects/jun-25/baia_mall_mozambique_lighting_design.jpg"
          alt="baia mall"
        />

        <Info>
          <h1>Baía Mall</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a> Av. de Marginal, Maputo</a>
          <p>Horario: Fechado ⋅ abre as 9AM</p>
          <button>Ver Mais</button>
        </Info>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: darkred;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;
const Content = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  width: 100vw;
  padding-left: 100px;

  /* height: 50vh; */
  img {
    height: 35vh;
    margin-bottom: 20px;
    border-radius: 6px;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
    img {
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: white;
  margin: 0px 40px;
  p {
    width: 350px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: max-content;
    h1 {
      text-align: center;
    }
  }
  button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 6px;
    margin: 10px 20px;
  }
`;
export default Advertise;
