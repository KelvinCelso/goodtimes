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
          places.map((place, key) =>
            key === 1 ? (
              <Advertise
                key={place.id}
                image={place.image}
                title={place.name}
                paragraph={place.paragraph}
                address={place.address}
                color="#fff"
                text="black"
              />
            ) : (
              <Advertise
                key={place.id}
                image={place.image}
                title={place.name}
                paragraph={place.paragraph}
                address={place.address}
                color="#111"
                text="white"
              />
            )
          )}
        <VisitContainer>
          <h1>Visite Também</h1>
          <Visit
            image={
              "https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
            }
            name={"Frooties"}
            address={"Matola"}
          />
          <Visit
            image={
              "https://lh5.googleusercontent.com/p/AF1QipNyc3Rw99PLbIyrYqTOMFahHyCeuDJctxrO2UIE=w500-h500-k-no"
            }
            name={"Mimmos"}
            address={"Matola"}
          />
          <Visit
            image={
              "https://www.100makas.com/sites/default/files/photos/hut7.png"
            }
            name={"Pizza Hut"}
            address={"Maputo"}
          />
          <Visit
            image={
              "https://media-cdn.tripadvisor.com/media/photo-s/16/b7/ef/e3/espaco-interior.jpg"
            }
            name={"South Beach"}
            address={"Matola"}
          />
        </VisitContainer>
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
const VisitContainer = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;
export default Places;
