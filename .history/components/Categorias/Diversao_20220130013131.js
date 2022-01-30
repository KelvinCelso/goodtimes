import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Items from "./Items";
import { useSelector } from "react-redux";
import { selectDiversao } from "../../features/gender/genderSlice";

function Diversao() {
  const diversao = useSelector(selectDiversao);
  return (
    <Container>
      <Content>
        <Header>
          <h1>Diversao</h1>
          <InputWrap>
            <input placeholder="search"></input>
            <SearchIcon />
          </InputWrap>
        </Header>
        <BottomPart>
          {diversao &&
            diversao.map((diversao, key) => (
              <Items
                key={key}
                image={diversao.image?.[0]}
                name={diversao.name}
                address={diversao.address?.[0]}
              />
            ))}
        </BottomPart>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  backdrop-filter: blur(5px);
  color: black;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  color: white;
`;
const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  padding: 10px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
const Header = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
  h1 {
    font-size: 1.6em;
  }
  input {
    height: 35px;
    border-radius: 30px;
    padding-left: 20px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    margin-right: 5px;
    &::placeholder {
      color: white;
    }
    &:focus {
      outline: none;
    }
  }
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;
const BottomPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
  @media (max-width: 500px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export default Diversao;
