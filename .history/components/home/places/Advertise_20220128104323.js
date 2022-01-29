import React, { useEffect } from "react";
import styled from "styled-components";
import { shuffle } from "lodash";
import { useRecoilState } from "recoil";
import { colorState } from "../../../atoms/ColorAtoms";

const colors = ["#111", "red", "blue", "cyan"];
function Advertise(props) {
  return (
    <Container cores={props.color} texto={props.text}>
      <Content>
        <img src={props.image} alt="baia mall" />

        <Info>
          <h1>{props.title}</h1>
          <p>{props.paragraph}</p>
          <a>{props.address} </a>
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
  color: ${(props) => props.texto};
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
  @media (max-width: 1120px) {
    margin-top: 50px;
  }
`;
const Content = styled.div`
  display: flex;
  padding: 90px;
  align-items: center;

  padding-left: 100px;

  /* height: 50vh; */
  img {
    height: 35vh;
    max-width: 410px;
    margin-bottom: 20px;
    border-radius: 6px;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  @media (max-width: 768px) {
    display: grid;
    justify-items: center;
    padding-left: 0px;

    img {
      width: 70vw;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.texto};
  margin: 0px 60px;
  p {
    width: 350px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;
    height: max-content;

    padding-left: 5px;
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
