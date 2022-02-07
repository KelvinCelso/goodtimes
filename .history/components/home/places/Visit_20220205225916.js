import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { itemState, likedState } from "../../../atoms/ItemsAtoms";
import { useRouter } from "next/router";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
function Visit(props) {
  const router = useRouter();
  const [likedSpots, setLikedSpots] = useRecoilState(likedState);
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          if (event.target.checked == true) {
            updateDoc(docref, {
              liked: arrayUnion(doc.data()),
            });
            updateState();
          } else {
            updateDoc(docref, {
              liked: arrayRemove(doc.data()),
            });
            updateState();
          }
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("error getting document:", error);
      });
  };

  const itemPages = (id, e) => {
    e.stopPropagation();
    router.push(`/details/${id}`);
  };
  const updateState = () => {
    getDoc(docref)
      .then((doc) => {
        if (doc.exists) {
          setLikedSpots(doc.data());
          console.log("set");
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("error getting document:", error);
      });
  };

  return (
    <Container>
      <Content>
        <Wrap onClick={(e) => itemPages(props.id, e)}>
          <img src={props.image} />
          <span>{props.name}</span>
          <p>{props.address}</p>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite style={{ color: "red" }} />}
          />
        </Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-right: 25px;
  border-radius: 6px;
  height: 400px;
  width: 265px;
  margin-bottom: 60px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(219, 219, 219, 0.8);
  box-shadow: rgb(0 0 0/ 69%) 0px 16px 20px -10px,
    rgb(0 0 0 / 73%) 0px 9px 5px -10px;

  &:hover {
    box-shadow: rgb(0 0 0/ 73%) 0px 24px 30px -16px,
      rgb(0 0 0 / 72%) 0px 25px 17px -10px;
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 275px;
    border-start-end-radius: 6px;
    border-start-start-radius: 6px;
    margin-bottom: 20px;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 5);
  }
  span {
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    &:hover {
      color: #e03d4e;
    }
  }

  @media (max-width: 768px) {
    height: 45vh;
    width: 50vw;
    margin-bottom: 60px;
    margin-right: 0px;
    padding: 0px;

    img {
      width: 45vw;
      height: 200px;
    }
  }
`;

export default Visit;
