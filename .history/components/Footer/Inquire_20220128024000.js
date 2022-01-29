import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <h2>Fale Connosco</h2>
        <DoubleInputs>
          <input type="text" placeholder="Nome" required></input>
          <input type="apelido" placeholder="Apelido" required> </input>
        </DoubleInputs>
        <input className="inp" placeholder="Email"></input>
        <input className="inp" placeholder="Contacto"></input>
        <input className="last" placeholder="Deixe a sua opinião"></input>
        <button>Submeter</button>

        <div class="fields">
                                    <div class="field name">
                                        <>
                                    </div>
                                    <div class="field email">
                                        <>
                                    </div>
                                    
                                </div>
                                
                                <div class="field">
                                    <div class="field sobrenome">
                                        <input type="text" placeholder="Sobrenome" required>
                                    </div>
                                    <div class="field textarea">
                                        <textarea  cols="30" rows="10" placeholder="Escrever..." required></textarea>
                                    </div>
                                    
                                    <div class="button"><button type="submit">Enviar</button></div>
                                </div>
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
