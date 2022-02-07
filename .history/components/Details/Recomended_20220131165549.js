import React from "react";
import styled from "styled-components";
import Visit from "../home/places/Visit";
function Recomended() {
  return (
    <Container>
      <Visit />
      <Visit />
      <Visit />
      <Visit />
      <Visit />
    </Container>
  );
}
const Container = styled.div`
  border-radius: 6px;
  display: flex;

  background: white;
  margin: 60px 10vw;
`;
export default Recomended;
