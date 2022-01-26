import styled from "styled-components";
import React from "react";
import Visit from "./places/Visit";
import Advertise from "./places/Advertise";

function Places() {
  return (
    <Container>
      <Content>
        <h1>Visite</h1>
        <hr></hr>
        <Advertise />
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
    margin-top: 100px;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 0px 60px;
  display: flex;
  flex-direction: column;
`;
export default Places;
