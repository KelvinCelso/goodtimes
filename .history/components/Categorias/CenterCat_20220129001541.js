import React from "react";
import styled from "styled-components";
function CenterCat() {
  return (
    <Container>
      <Img>
        <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
`;
export default CenterCat;
