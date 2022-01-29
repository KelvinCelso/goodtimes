import React from "react";
import styled from "styled-components";
function CenterCat() {
  return (
    <Container>
      <Img></Img>
    </Container>
  );
}
const Container = styled.div`
  color: white;
  height: 200px;

  position: relative;
`;
export default CenterCat;
