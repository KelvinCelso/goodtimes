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
function DetailsCenter() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const [shuffled, setShuffled] = useState([]);
  let recommends = [];
  const items = useRecoilValue(itemState);
  const [detailData, setDetailData] = useState({});
  const [currentImage, setCurrentImage] = useRecoilState(imageState);
  useEffect(() => {
    const docref = doc(db, "places", items);
    getDoc(docref)
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
          setCurrentImage(detailData.image?.[0]);
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("error getting document:", error);
      });
  }, [items]);

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
      console.log("recommends 40", recommends);
    });
  }, [userName]);

  return (
    <Container>
      <Content>
        <ItemImages
          images={detailData.image?.[0]}
          allImages={detailData.image}
          contacto={detailData.contacto}
        />
        <ItemInfo
          name={detailData.name}
          address={detailData.address?.[0]}
          horario={detailData.horario}
          contacto={detailData.contacto}
        />
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
  width: 100%;
  padding-top: 80px;
`;

export default DetailsCenter;
