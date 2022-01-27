import styled from "styled-components";
import React from "react";
import Visit from "./places/Visit";
import Advertise from "./places/Advertise";

function Places() {
  return (
    <Container>
      <Content>
        <Advertise
          image="https://ckr.co.za/pieces/projects/jun-25/baia_mall_mozambique_lighting_design.jpg "
          title="Baía Mall"
          color="#111"
          text="white"
        />
        <Advertise
          image="https://ckr.co.za/pieces/projects/jun-25/baia_mall_mozambique_lighting_design.jpg "
          color="white"
          text="black"
        />
        <Advertise
          image="https://ckr.co.za/pieces/projects/jun-25/baia_mall_mozambique_lighting_design.jpg "
          color="#111"
          text="white"
        />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 290px;
  overflow: hidden;
  margin-bottom: 80px;
  background-color: white;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (min-width: 1080px) {
    margin-top: 190px;
  }
`;
const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export default Places;
