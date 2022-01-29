import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <h2>Fale Connosco</h2>
        <DoubleInputs>
          <input className="in" placeholder="Nome"></input>
          <input className="in" placeholder="Apelido"></input>
        </DoubleInputs>
        <input className="inp" placeholder="Email"></input>
        <input className="inp" placeholder="Contacto"></input>
        <textarea
          className="last"
          cols="5"
          rows="5"
          placeholder="Deixe a sua opinião"
          required
        ></textarea>
        <button>Submeter</button>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 370px;
  color: white;
  margin-top: 20px;
  margin-right: 40px;

  border: 1px solid white;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 4px;
    background: none;
    &::placeholder {
      color: white;
    }
  }
  h2 {
    margin-left: 20px;
  }
  .inp {
    margin-bottom: 10px;

    height: 30px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .last {
    height: 100px;
    margin: 0px 20px;
  }
  button {
    width: 100px;
    height: 40px;
    margin-top: 20px;
    background-color: black;
    border: 1px solid white;
    color: white;
    margin-left: 20px;
    border-radius: 4px;
  }
`;
const DoubleInputs = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 15px;

  .in {
    height: 30px;
    margin-bottom: 10px;
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export default Inquire;
