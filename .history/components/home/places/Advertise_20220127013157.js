import React, { useEffect } from "react";
import styled from "styled-components";
import { shuffle } from "lodash";
import { useRecoilState } from "recoil";
import { colorState } from "../../../atoms/ColorAtoms";

const colors = ["#111", "red", "blue", "cyan"];
function Advertise(props) {
  return (
    <Container cores={"#fff"}>
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
          <a href="#" className="button">
            Ver Mais
          </a>
        </Info>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.cores};

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
  .white {
    background: white;
    color: black;
    p {
      color: black;
    }
    h1 {
      color: black;
    }
    a {
      color: black;
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
  margin: 0px 60px;
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
  .button {
    width: 150px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    background: #e03d4e;
    padding: 10px 30px;
    border-radius: 6px;
    margin-top: 20px;
    color: white;
    border: 2px solid #e03d4e;
    transition: all 0.3s ease;
    &:hover {
      color: #e03d4e;
      background: none;
    }
  }
`;
export default Advertise;
