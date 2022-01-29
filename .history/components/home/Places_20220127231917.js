import styled from "styled-components";
import React from "react";
import Visit from "./places/Visit";
import Advertise from "./places/Advertise";
import { useSelector } from "react-redux";
import { selectPlace } from "../../features/places/placesSlice";

function Places() {
  const places = useSelector(selectPlace);
  const position = [0, 1, 2];
  return (
    <Container>
      <Content>
        {places &&
          places.map((place) => (
            <Advertise
              key={place.id}
              image={place.image}
              title={place.name}
              paragraph={place.paragraph}
              address={place.address}
              color="#111"
              text="white"
            />
          ))}
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
