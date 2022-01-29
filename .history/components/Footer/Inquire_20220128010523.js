import React from "react";
import styled from "styled-components";

function Inquire() {
  return (
    <Container>
      <Content>
        <span>Inquire</span>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  color: white;
  background-color: white;
  margin-top: 20px;
  margin-right: 40px;
`;
const Content = styled.div``;

export default Inquire;
