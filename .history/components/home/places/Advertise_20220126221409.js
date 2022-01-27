import React from "react";
import styled from "styled-components";
function Advertise() {
  return (
    <Container>
      <Content>
        <img
          src="https://ckr.co.za/pieces/projects/jun-25/baia_mall_mozambique_lighting_design.jpg"
          alt="baia mall"
        />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: block;
  background-color: red;
`;
const Content = styled.div`
  display: flex;
  height: 60vh;
  background-color: red;
  justify-content: center;
  align-items: center;
  img {
    height: 40vh;
  }
`;
export default Advertise;
