import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserName } from "../../features/user/userSlice";
import Highlights from "./Highlights";
import Places from "./Places";
import View from "./View";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { setPlaces } from "../../features/places/placesSlice";

function Center(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let paids = [];

  useEffect(() => {
    onSnapshot(collection(db, "places"), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data.type) {
          case "paid":
            paids = [...paids, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setPlaces({
          paid: paids,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
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

export default Center;
