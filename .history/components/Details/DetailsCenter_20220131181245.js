import { collection, onSnapshot } from "firebase/firestore";
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPlaces } from "../../features/places/placesSlice";
import { selectUserName } from "../../features/user/userSlice";
import Visit from "../home/places/Visit";
import ItemImages from "./ItemImages";
import ItemInfo from "./ItemInfo";
import Recomended from "./Recomended";
function DetailsCenter() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const [nr, setNr] = useState(null);
  let recommends = [];

  useEffect(() => {
    onSnapshot(collection(db, "places"), (snapshot) => {
      shuffle(
        snapshot.docs.slice(0, 5).map((doc) => {
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
        })
      );
      dispatch(
        setPlaces({
          recommended: recommends,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <Content>
        <ItemImages />
        <ItemInfo />
      </Content>
      <Recomended />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  z-index: 1;
  top: 100px;
  width: 100vw;
  margin-top: 80px;
  margin-bottom: 80px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 80px;
`;

export default DetailsCenter;
