import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectRecommended,
  selectVisits,
} from "../../features/places/placesSlice";
import Visit from "../home/places/Visit";
function Recomended(props) {
  const recommended = useSelector(selectRecommended);

  return (
    <Container>
      <Content>
        {recommended &&
          recommended.map((recommend, key) => (
            <Visit
              id={recommend.id}
              key={key}
              image={recommend.image?.[0]}
              name={recommend.name}
              address={recommend.address?.[0]}
            />
          ))}
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  margin: 60px 10vw;
  color: black;
  border-radius: 6px;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Recomended;
