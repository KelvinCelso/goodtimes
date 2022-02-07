import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { itemState, likedState } from "../../atoms/ItemsAtoms";
import Link from "next/link";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import {
  selectUid,
  selectUserID,
  selectUserName,
} from "../../features/user/userSlice";
import Liked from "../Favorites/Liked";
import { db } from "../../firebase";
function Items(props) {
  const router = useRouter();
  const uid = useSelector(selectUserID);
  const itemPages = (id, e) => {
    e.stopPropagation();
    router.push(`/details/${id}`);
  };
  const [checked, setChecked] = useState(false);
  const likedSpots = useRecoilValue(likedState);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    const docRef = doc(db, "user", uid);
    const docref = doc(db, "places", props.id);
    const docSnap = async () => await getDoc(docref);
    console.log("this is docsnap", docSnap);
    if (checked) {
      updateDoc(docRef, {
        liked: arrayUnion(props.name),
      });
    } else {
    }
  }, [checked]);

  return (
    <Container>
      <img src={props.image} onClick={(e) => itemPages(props.id, e)} />
      <Content>
        <Info onClick={(e) => itemPages(props.id, e)}>
          <h3>
            <a href="">{props.name}</a>
          </h3>
          <p>{props.address}</p>
        </Info>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite style={{ color: "red" }} />}
        />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 20px;
  width: 25vw;
  color: black;
  margin-right: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  img {
    object-fit: cover;
    max-width: 25vw;
    height: 200px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
  }
  @media (min-width: 1210px) {
    width: 350px;
    height: 200px;
    img {
      object-fit: cover;
      max-width: 30vw;
      height: 200px;
    }
  }
  @media (max-width: 1210px) {
    width: 75vw;
    margin-right: 0px;
    margin-left: 0px;
    img {
      max-width: 75vw;
      height: 250px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  margin-left: 5px;
  padding-left: 5px;
  h3 {
    margin-bottom: 0px;
    margin-top: 10px;
    a {
      text-decoration: none;

      color: black;
      transition: all 0.3s ease;
      &:hover {
        color: #e03d4e;
      }
    }
  }
  p {
    margin-top: 0px;
  }
`;

export default Items;
