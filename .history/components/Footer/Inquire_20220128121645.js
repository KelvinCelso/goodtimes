import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <h2>Fale Connosco</h2>
        <DoubleInputs>
          <input className="in" type="text" placeholder="Nome" required></input>
          <input
            className="sobre"
            type="text"
            placeholder="Sobrenome"
            required
          ></input>
        </DoubleInputs>
        <input
          className="inp"
          type="email"
          placeholder="Email"
          required
        ></input>
        <textarea
          className="last"
          cols="5"
          rows="5"
          placeholder="Deixe a sua opinião"
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input,
  textarea {
    border: 1px solid #fff;
    border-radius: 4px;
    background: none;
    color: white;
    padding: 0 15px;
    font-family: "Dongle", sans-serif;
    &::placeholder {
      color: white;
    }
  }
  textarea {
    padding-top: 5px;
  }
  h2 {
    margin-left: 20px;
  }
  .inp {
    margin-bottom: 10px;

    height: 40px;
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
    transition: all 0.3s ease;
    &:hover {
      color: black;
      background-color: white;
      cursor: pointer;
    }
  }
`;
const DoubleInputs = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 15px;

  .in {
    height: 40px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 5px;
  }
  .sobre {
    height: 40px;
    margin-bottom: 10px;
    margin-right: 5px;
  }
`;

export default Inquire;
