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
  &:hover {
    background-color: red;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
const Content = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  img {
    height: 40vh;
    margin-left: 50px;
  }
`;
const Info = styled.div`
  margin-left: 100px;
  color: white;
`;
export default Advertise;
