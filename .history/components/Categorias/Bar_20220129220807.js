import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Items from "./Items";
import { useSelector } from "react-redux";
import { selectBar } from "../../features/gender/genderSlice";

function Bar() {
  const bar = useSelector(selectBar);
  return (
    <Container>
      <Content>
        <Header>
          <h1>Bar</h1>
          <InputWrap>
            <input placeholder="search"></input>
            <SearchIcon />
          </InputWrap>
        </Header>
        <BottomPart>
          {bar &&
            bar.map((bar, key) => (
              <Items
                key={key}
                image={bar.image?.[0]}
                name={bar.name}
                address={bar.address?.[0]}
              />
            ))}
        </BottomPart>
      </Content>
    </Container>
  );
}

export default Bar;
