import React from "react";
import styled from "styled-components";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";

function Items(props) {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <Content>
        <Link href="">
          <img src={props.image} alt="Favoto" />
        </Link>
        <Title>
          <Link href="">
            <p>{props.name}</p>
          </Link>
          <Checkbox
            className="likebtn"
            checked={checked}
            onChange={handleChange}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite style={{ color: "red" }} />}
          />
        </Title>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  color: black;
`;

const Content = styled.div`
  color: #000;
  width: 370px;
  height: 80px;
  position: relative;
  border-radius: 6px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  img {
    object-fit: cover;
    width: 150px;
    height: 100%;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    cursor: pointer;
  }
`;
const Title = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  left: 120px;
  padding: 10px;

  bottom: 0px;
  background-color: white;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #000;
    display: block;
    font-weight: 700;
    font-size: 20px;
    height: 30px;
    &:hover {
      color: #e03d4e;
    }
  }
  p {
    display: block;
    left: 0px;
    font-weight: bold;
    background: background;
  }
  .likebtn {
    margin-left: 120px;
    height: 42px;
  }
`;

export default Items;