import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <h1>Fale Connosco</h1>
        <DoubleInputs>
          <input className="in"></input>
          <input className="in"></input>
        </DoubleInputs>
        <input className="inp"></input>
        <input className="inp"></input>
        <input className="inp"></input>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 400px;
  color: white;
  margin-top: 20px;
  margin-right: 40px;
  background-color: red;
  padding: 0px 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  .inp {
    margin-bottom: 10px;
  }
`;
const DoubleInputs = styled.div`
  display: flex;

  .in {
    width: 200px;
    height: 30px;
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;

export default Inquire;
