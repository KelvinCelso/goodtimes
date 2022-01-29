import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <h2>Fale Connosco</h2>
        <DoubleInputs>
          <input className="in"></input>
          <input className="in"></input>
        </DoubleInputs>
        <input className="inp"></input>
        <input className="inp"></input>
        <input className="last"></input>
        <button>Submeter</button>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 350px;
  color: white;
  margin-top: 20px;
  margin-right: 40px;

  padding: 0px 30px;
  border: 1px solid white;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: none;
  }
  .inp {
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    background-color: gray;
  }
  .last {
    height: 100px;
    background-color: gray;
  }
  button {
    width: 100px;
    height: 40px;
    margin-top: 10px;
    background-color: black;
    border: 1px solid white;
    color: white;
  }
`;
const DoubleInputs = styled.div`
  display: flex;
  width: 100%;

  .in {
    height: 30px;
    margin-bottom: 10px;
    background-color: darkgray;
  }
`;

export default Inquire;
