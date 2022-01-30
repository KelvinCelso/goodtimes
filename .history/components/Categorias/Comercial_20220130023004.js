import React, { useState } from "react";
import { style } from "@mui/system";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Items from "./Items";
import { useSelector } from "react-redux";
import { selectComercial } from "../../features/gender/genderSlice";

function Comercial() {
  const comercial = useSelector(selectComercial);
  const [search, setSearch] = useState("");
  return (
    <Container>
      <Content>
        <Header>
          <h1>Comercial</h1>
          <InputWrap>
            <input
              placeholder="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <SearchIcon />
          </InputWrap>
        </Header>
        <BottomPart>
          {comercial &&
            comercial
              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((comercial, key) => (
                <Items
                  key={key}
                  image={comercial.image?.[0]}
                  name={comercial.name}
                  address={comercial.address?.[0]}
                />
              ))}
        </BottomPart>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  backdrop-filter: blur(5px);
  color: black;
  width: 100%;
  max-height: 600px;
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

export default Comercial;
