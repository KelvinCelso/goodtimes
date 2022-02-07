import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { set, shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPlaces } from "../../features/places/placesSlice";
import { selectUserName } from "../../features/user/userSlice";
import Visit from "../home/places/Visit";
import ItemImages from "./ItemImages";
import ItemInfo from "./ItemInfo";
import Recomended from "./Recomended";
import { db } from "../../firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { imageState, itemState } from "../../atoms/ItemsAtoms";
function DetailsCenter(props) {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const [shuffled, setShuffled] = useState([]);
  let recommends = [];

  useEffect(() => {
    onSnapshot(collection(db, "places"), (snapshot) => {
      shuffle(snapshot.docs)
        .slice(0, 5)
        .map((doc) => {
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
        });
      dispatch(
        setPlaces({
          recommeded: recommends,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <Content>
        <ItemImages images={props.image} />
        <ItemInfo name={props.name} />
      </Content>
      <Recomended image={detailData.contacto} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 800px) {
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default DetailsCenter;
