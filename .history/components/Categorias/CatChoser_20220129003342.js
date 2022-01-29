import React from "react";
import styled from "styled-components";
function CatChoser() {
  return (
    <Container>
      <Content>
        <Wrap>Bar</Wrap>
        <Wrap>Entretenimento</Wrap>
        <Wrap>Estilo</Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div``;

const Wrap = styled.div``;

export default CatChoser;
