import React from "react";
import styled from "styled-components";
function Items(props) {
  return (
    <Container>
      <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  margin-top: 20px;
  img {
  }
`;

export default Items;
