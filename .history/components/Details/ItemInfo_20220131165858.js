import React from "react";
import styled from "styled-components";

function ItemInfo() {
  return (
    <Container>
      <Content>
        <h1>Malony</h1>
        <div className="separator"></div>
        <p>Rua da Mozal número 290</p>
        <p>82 123 4567</p>
        <p>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500
        </p>
        <h2>Horario</h2>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  width: 35vw;
  height: 100%;
  padding: 30px;

  background-color: white;
  border-radius: 6px;
  flex-direction: column;
  border: 1px solid white;
  color: black;
  letter-spacing: 1px;
  h1 {
    margin: 0px;
    padding: 0px;
    text-transform: uppercase;
  }
  .separator {
    display: block;
    width: 10vw;
    height: 2px;
    background-color: #000;
    margin: 5px 0;
  }
`;

export default ItemInfo;