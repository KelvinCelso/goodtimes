import React from "react";
import styled from "styled-components";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  favoritePlaceState,
  favoriteState,
  likedState,
  uidState,
} from "../../atoms/ItemsAtoms";
import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import { selectUserName } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import { db } from "../../firebase";

function Items(props) {
  const [favs, setFavs] = useRecoilState(likedState);
  const [checked, setChecked] = useState(true);
  const [current, setCurrent] = useRecoilState(favoriteState);
  const uid = useRecoilValue(uidState);
  const userName = useSelector(selectUserName);
  const docRef = doc(db, "user", uid);
  useEffect(() => {
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          setFavs(doc.data().liked);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userName]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    updateDoc(docRef, {
      liked: arrayRemove(props.doc),
    }).then(
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists) {
            setFavs(doc.data());
          } else {
            console.log("no such document in firebase");
          }
        })
        .catch((error) => {
          console.log("error getting document:", error);
        })
    );
  };

  return (
    <Container>
      <Content
        onClick={() => {
          setCurrent(props.doc);
        }}
      >
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
  display: flex;
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

  p {
    display: block;
    left: 0px;
    font-weight: bold;
  }
  .likebtn {
    height: 42px;
  }
`;

export default Items;
