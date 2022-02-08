import styled from "styled-components";
import React from "react";
import Visit from "./places/Visit";
import Advertise from "./places/Advertise";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectPaids,
  selectVisits,
} from "../../features/places/placesSlice";
import { useRecoilState, useRecoilValue } from "recoil";

import Skeleton from "@material-ui/lab/Skeleton";

function Places(props) {
  const places = useSelector(selectPaids);
  const visits = useSelector(selectVisits);

  return (
    <Container>
      <Content>
        {places &&
          places.map((place, key) =>
            key === 1 ? (
              <Advertise
                key={place.id}
                id={place.id}
                image={place.image?.[0]}
                title={place.name}
                paragraph={place.paragraph}
                address={place.address?.[0]}
                color="#fff"
                text="black"
              />
            ) : (
              <Advertise
                key={place.id}
                id={place.id}
                image={place.image?.[0]}
                title={place.name}
                paragraph={place.paragraph}
                address={place.address?.[0]}
                color="#111"
                text="white"
              />
            )
          )}

        <h1>Visite Também</h1>
        {visits ? (
          <VisitContainer>
            {visits &&
              visits.map((visit) => (
                <Visit
                  id={visit.id}
                  key={visit.id}
                  image={visit.image?.[0]}
                  images={visit.image}
                  name={visit.name}
                  address={visit.address?.[0]}
                />
              ))}
          </VisitContainer>
        ) : (
          <SkeletonContainer>
            <Skeleton
              sx={{ marginRight: "10px" }}
              classname="skeleton"
              variant="rect"
              width={210}
              height={118}
            />
            <Skeleton
              classname="skeleton"
              variant="rect"
              width={210}
              height={118}
            />
            <Skeleton
              classname="skeleton"
              variant="rect"
              width={210}
              height={118}
            />
          </SkeletonContainer>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 290px;
  overflow: hidden;
  margin-bottom: 10px;
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
  h1 {
    margin-left: 30px;
  }
`;
const VisitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
const SkeletonContainer = styled.div`
  display: flex;
  .skeleton {
    margin-right: 20px;
  }
`;
export default Places;
