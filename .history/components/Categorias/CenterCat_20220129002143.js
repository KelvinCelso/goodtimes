import React from "react";
import styled from "styled-components";
function CenterCat() {
  return (
    <Container>
      <Img>
        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </Img>
    </Container>
  );
}
const Container = styled.div`
  color: white;
  height: 200px;

  position: relative;
`;
const Img = styled.div`
  width: 100vw;
  height: 300px;
  img {
    width: 100vw;
    height: 70vh;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
  }
`;
export default CenterCat;
