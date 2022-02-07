import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectRecommended,
  selectVisits,
} from "../../features/places/placesSlice";
import Visit from "../home/places/Visit";
function Recomended() {
  const recommended = useSelector(selectRecommended);
  console.log("this is recommends", recommended);
  return (
    <Container>
      <Content>
        {recommended &&
          recommended.map((recommend) => (
            <>
              <Visit
                key={recommend.id}
                image={recommend.image?.[0]}
                name={recommend.name}
                address={recommend.address?.[0]}
              />
            </>
          ))}
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: white;
  margin: 60px 10vw;
  color: black;
`;
export default Recomended;
