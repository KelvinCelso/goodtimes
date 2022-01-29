import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
function Restaurantes() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Restaurantes</h1>
          <InputWrap>
            <input placeholder="search"></input>
            <SearchIcon />
          </InputWrap>
        </Header>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
        <p>Loren</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  backdrop-filter: blur(5px);
  color: black;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  color: white;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 10px;
`;
const Header = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h1 {
    font-size: 1.6em;
  }
  input {
    height: 35px;
    border-radius: 30px;
    padding-left: 20px;
    background-color: none;
    &::placeholder {
    }
  }
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;
export default Restaurantes;
