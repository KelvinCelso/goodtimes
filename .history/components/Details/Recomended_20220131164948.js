import React from "react";
import styled from "styled-components";
import Visit from "../home/places/Visit";
function Recomended() {
  return (
    <Container>
      <Visit />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding: 20px;
`;
export default Recomended;
