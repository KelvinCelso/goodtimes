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
import { loadingState } from "../../atoms/loadingAtom";

function Center(props) {
  const [isLoading, setLoading] = useRecoilState(loadingState);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let paids = [];
  let visits = [];
  let loaded = false;
  useEffect(() => {
    onSnapshot(collection(db, "places"), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "paid":
            paids = [...paids, { id: doc.id, ...doc.data() }];
            loaded = true;
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
    });
  }, [userName]);

  return (
    <Container>
      <Pesquisar>
        <input placeholder="Pesquisar"></input>
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
`;
const MenuContainer = styled.div`
  @media (max-width: 768px) {
  }
`;
const Pesquisar = styled.div`
  display: flex;
  justify-content: center;
  width: 98.5vw;
  background-color: black;
  position: absolute;
  top: 150px;
`;

export default Center;
