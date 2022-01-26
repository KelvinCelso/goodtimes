import React from "react";
import styled from "styled-components";
function Visit() {
  return (
    <Container>
      <Wrap>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/14/4c/45/eb/froooties-milkshakes.jpg"
          alt="frooties"
        />
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  img {
    width: 200px;
    height: 200px;
  }
`;

export default Visit;
