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
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s."
          color="#111"
          text="white"
        />
        <Advertise
          image="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg "
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s."
          title="Frooties"
          color="white"
          text="black"
        />
        <Advertise
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRAWz_9T-qOb_oc-MZwy5b-fVBN9rNzXWzC7wEiKHzatu-4JCygLmUrnP9KeHzQqFD0o&usqp=CAU"
          title="Spar"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s."
          color="#111"
          text="white"
        />
        <Visit />
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
