import React from "react";
import styled from "styled-components";

function ItemInfo() {
  return (
    <Container>
      <Content>
        <h1>Malony</h1>
        <div className="separator"></div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  width: 35vw;
  height: 100%;
  padding: 10px;
  margin: 10px;
  background-color: white;
  border-radius: 6px;
  flex-direction: column;
  border: 1px solid white;
  color: black;
  letter-spacing: 1px;
  padding-left: 20px;
  h1 {
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .separator {
    display: block;
    width: 10vw;
    height: 2px;
    background-color: #000;
    margin: 5px 0;
  }
`;

export default ItemInfo;
