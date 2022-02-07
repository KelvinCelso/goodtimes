import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserName } from "../../features/user/userSlice";
import Highlights from "./Highlights";
import Places from "./Places";
import View from "./View";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { setPlaces } from "../../features/places/placesSlice";
import { db } from "../../firebase";
import { useRecoilState } from "recoil";

import SearchIcon from "@mui/icons-material/Search";
function Center(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let paids = [];
  let visits = [];

  useEffect(() => {
    onSnapshot(collection(db, "places"), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "paid":
            paids = [...paids, { id: doc.id, ...doc.data() }];

            break;
          case "visit":
            visits = [...visits, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(
        setPlaces({
          paid: paids,
          visit: visits,
        })
      );
      console.log("visits test", visits);
    });
  }, [userName]);

  return (
    <Container>
      <Pesquisar>
        <input placeholder="Pesquisar"></input>
        <SearchIcon className="icon" />
      </Pesquisar>
      <Highlights />
      <MenuContainer>
        <View />
        <Places />
      </MenuContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
const MenuContainer = styled.div`
  overflow-x: hidden;
  @media (max-width: 768px) {
  }
`;
const Pesquisar = styled.div`
  position: absolute;
  width: 98.2vw;
  align-items: center;
  display: flex;
  justify-content: center;
  top: 120px;
  input {
    height: 45px;
    width: 300px;
    border-radius: 20px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-size: 1.1em;
    backdrop-filter: blur(3px);
    padding-left: 20px;
    &::placeholder {
      font-weight: bold;
      color: white;
    }
    &:focus {
      outline: none;
    }
  }
  .icon {
    color: white;
    margin-left: 10px;
  }
`;

export default Center;
