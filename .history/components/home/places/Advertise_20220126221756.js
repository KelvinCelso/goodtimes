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
        <Info>
          <h1>Baía Mall</h1>
          <span></span>
        </Info>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: block;
  background-color: darkred;
`;
const Content = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  img {
    height: 40vh;
  }
`;
const Info = styled.div`
  margin-left: 100px;
  color: white;
`;
export default Advertise;
