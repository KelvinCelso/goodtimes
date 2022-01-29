import React from "react";
import styled from "styled-components";
function CenterCat() {
  return (
    <Container>
      <Img>
        <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
    height: 50vh;
  }
`;
export default CenterCat;
