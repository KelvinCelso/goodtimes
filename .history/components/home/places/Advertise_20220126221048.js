import React from "react";
import styled from "styled-components";
function Advertise() {
  return (
    <Container>
      <Content>Add spot</Content>
    </Container>
  );
}
const Container = styled.div`
  display: block;
  background-color: red;
`;
const Content = styled.div`
  display: flex;
  height: 70vh;
  background-color: red;
`;
export default Advertise;
