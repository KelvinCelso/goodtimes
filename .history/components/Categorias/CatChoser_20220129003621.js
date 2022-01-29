import React from "react";
import styled from "styled-components";
function CatChoser() {
  return (
    <Container>
      <Content>
        <Wrap>
          <a href="#">Bar</a>
        </Wrap>
        <Wrap>
          <a href="#">Entretenimento</a>
        </Wrap>
        <Wrap>
          <a href="#">Estilo</a>
        </Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  display: flex;
  margin: 10px;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
  }
`;

export default CatChoser;
