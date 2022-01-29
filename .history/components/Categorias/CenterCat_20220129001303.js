import React from "react";
import styled from "styled-components";
function CenterCat() {
  return (
    <Container>
      <Img>
        <img src="https://previews.123rf.com/images/lmv/lmv1803/lmv180303510/97066967-blurred-restaurant-or-cafe-background-tables-and-chairs-in-the-lobby-of-the-mall-visitors-to-the-res.jpg" />
      </Img>
    </Container>
  );
}
const Container = styled.div`
  color: white;
  height: 200px;

  position: relative;
`;
const Img = styled.div``;
export default CenterCat;
