import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <DoubleInputs>
          <input></input>
          <input></input>
        </DoubleInputs>
        <input></input>
        <input></input>
        <input></input>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 450px;
  height: 500px;
  color: white;
  margin-top: 20px;
  margin-right: 40px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const DoubleInputs = styled.div`
  display: flex;
  width: 100%;
  input {
    height: 30px;
  }
`;

export default Inquire;
