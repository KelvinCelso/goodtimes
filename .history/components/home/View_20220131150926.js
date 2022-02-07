import React from "react";
import styled from "styled-components";
import Places from "./Places";
import { useRecoilState } from "recoil";
import { catState } from "../../atoms/pageAtoms";
import { useDispatch } from "react-redux";
import { setPages } from "../../features/pag/pageSlice";
import Link from "next/link";

function View() {
  const [cate, setCate] = useRecoilState(catState);
  const dispatch = useDispatch();
  console.log(cate);
  return (
    <Container>
      <Content>
        <Link href="/categorias">
          <Wrap
            onClick={() => {
              setCate("restaurantes"), console.log(cate);
            }}
          >
            <h1>Restaurantes</h1>
            <img src="https://i.imgur.com/2ZZfFQb.jpeg"></img>
          </Wrap>
        </Link>

        <Link href="/categorias">
          <Wrap
            onClick={() => {
              setCate("bar"), console.log(cate);
            }}
          >
            <h1>Bar</h1>
            <img src="https://spguia.melhoresdestinos.com.br/system/fotos_comunidade/fotos/4429/show/mundo-s-bar-maputo.jpg"></img>
          </Wrap>
        </Link>
        <Link href="/categorias">
          <Wrap onClick={() => setCate("diversao")}>
            <h1>Diversão</h1>
            <img src="https://img5.localgymsandfitness.com/056/482/3061217990564824.jpg"></img>
          </Wrap>
        </Link>
        <Link href="/categorias">
          <Wrap onClick={() => setCate("comercial")}>
            <img src="https://www.100makas.com/sites/default/files/photos/studio2.jpg"></img>
            <h1>Comercial</h1>
          </Wrap>
        </Link>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  z-index: 1;
  margin-bottom: 0px;
  overflow: hidden;
  top: 70vh;

  position: absolute;
  justify-content: center;
  width: 98.2vw;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    position: inherit;
    margin-top: 30px;
  }
`;
const Content = styled.div`
  overflow: hidden;
  justify-items: center;
  width: 100vw;
  display: grid;
  margin: 0px 20px;
  grid-gap: 25px;
  gap: 25px;
  position: relative;
  margin-bottom: 0px;
  padding-bottom: 80px;
  a {
    text-decoration: none;
    color: black;
  }
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  justify-content: center;
  border: 2px solid black;
  position: relative;
  display: flex;
  border-radius: 6px;
  height: 220px;
  padding: 20px;
  width: 300px;
  align-items: center;
  backdrop-filter: blur(5px);
  cursor: pointer;
  box-shadow: rgb(0 0 0/ 69%) 0px 16px 20px -10px,
    rgb(0 0 0 / 73%) 0px 9px 5px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    box-shadow: rgb(0 0 0/ 73%) 0px 24px 30px -16px,
      rgb(0 0 0 / 72%) 0px 25px 17px -10px;
    transform: scale(1.05);
    img {
      opacity: 1;
    }
    h1 {
      color: white;
    }
  }
  @media (max-width: 1280px) {
    width: 260px;
    height: 180px;
  }
  @media (max-width: 1120px) {
    width: 340px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 260px;
  }

  h1 {
    font-size: 1.6em;
    z-index: 1;
  }
  img {
    opacity: 0;
    inset: 0px;
    height: 100%;
    display: block;
    object-fit: cover;
    position: absolute;
    border-radius: 6px;

    transition: opacity 500ms ease-in-out 0s;
    z-index: -11;
    top: 0;
    width: 100%;

    @media (max-width: 768px) {
      img {
        opacity: 1;
      }
    }
  }
`;

export default View;