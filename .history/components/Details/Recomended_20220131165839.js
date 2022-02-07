import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectVisits } from "../../features/places/placesSlice";
import Visit from "../home/places/Visit";
function Recomended() {
  const visits = useSelector(selectVisits);
  return (
    <Container>
      {visits &&
        visits.map((visit) => (
          <Visit
            key={visit.id}
            image={visit.image?.[0]}
            name={visit.name}
            address={visit.address?.[0]}
          />
        ))}
    </Container>
  );
}
const Container = styled.div`
  border-radius: 6px;
  display: flex;
  padding: 20px;
  background: white;
  margin: 60px 10vw;
`;
export default Recomended;
