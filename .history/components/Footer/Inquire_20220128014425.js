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
        <input className="last"></input>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 450px;
  color: white;
  margin-top: 20px;
  margin-right: 40px;
  background-color: red;
  padding: 0px 30px;
  border: 1px solid white;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;

  .inp {
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    background-color: gray;
  }
  .last {
    height: 200px;
  }
`;
const DoubleInputs = styled.div`
  display: flex;
  width: 100%;

  .in {
    height: 30px;
    margin-bottom: 10px;
  }
`;

export default Inquire;
