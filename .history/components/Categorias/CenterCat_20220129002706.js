import React from "react";
import styled from "styled-components";
function CenterCat() {
  return (
    <Container>
      <Img>
        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </Img>
      <Content>aaaa</Content>
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
  z-index: -1;
  img {
    width: 100vw;
    height: 70vh;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
  }
`;
const Content = styled.div`
  position: absolute;
  background-color: white;
  top: 180px;
  margin: 0px 50px;
  width: 100%;
`;
export default CenterCat;
