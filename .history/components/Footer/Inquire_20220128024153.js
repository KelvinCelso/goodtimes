import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <h2>Fale Connosco</h2>
        <DoubleInputs>
          <input type="text" placeholder="Nome" required></input>
          <input type="apelido" placeholder="Apelido" required>
            {" "}
          </input>
        </DoubleInputs>
        <input type="text" className="inp" placeholder="Email" required></input>
        <input className="inp" placeholder="Contacto" required></input>
        <textarea
          cols="30"
          rows="10"
          placeholder="Escrever..."
          required
        ></textarea>
        <button type="submit">Submeter</button>
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
  input {
    border: none;
  }
  h2 {
    margin-left: 20px;
  }
  .inp {
    margin-bottom: 10px;

    height: 30px;
    background-color: gray;
    margin-right: 20px;
    margin-left: 20px;
  }
  .last {
    height: 100px;
    background-color: gray;
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
  }
`;
const DoubleInputs = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 15px;

  .in {
    height: 30px;
    margin-bottom: 10px;
    background-color: gray;
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export default Inquire;
