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
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  height: 50px;
  background-color: red;
`;
export default Advertise;
