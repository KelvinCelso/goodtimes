import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setGenders } from "../../features/gender/genderSlice";
import { selectUserName } from "../../features/user/userSlice";
import { db } from "../../firebase";
import Restaurantes from "./Restaurantes";
import Comercial from "./Comercial";
import Bar from "./Bar";
import Diversao from "./Diversao";
import { useRecoilValue } from "recoil";
import { catState } from "../../atoms/pageAtoms";
import { selectPages } from "../../features/pag/pageSlice";

function CenterCat() {
  const cate = useRecoilValue(catState);
  const dispatch = useDispatch();
  let restaurantes = [];
  let comercials = [];
  let bars = [];
  let diversaos = [];
  const userName = useSelector(selectUserName);

  useEffect(() => {
    onSnapshot(collection(db, "places"), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().gender) {
          case "restaurante":
            restaurantes = [...restaurantes, { id: doc.id, ...doc.data() }];
            break;
          case "bar":
            bars = [...bars, { id: doc.id, ...doc.data() }];
            break;
          case "comercial":
            comercials = [...comercials, { id: doc.id, ...doc.data() }];
            break;
          case "diversao":
            diversaos = [...diversaos, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setGenders({
          restaurante: restaurantes,
          bar: bars,
          comercial: comercials,
          diversao: diversaos,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <Img>
        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </Img>
      <Content>
        {cate == "restaurantes" && <Restaurantes />}
        {cate == "bar" && <Bar />}
        {cate == "comercial" && <Comercial />}
        {cate == "diversao" && <Diversao />}
      </Content>
    </Container>
  );
}
const Container = styled.div`
  color: white;
  overflow-x: hidden;
`;
const Img = styled.div`
  height: 300px;

  img {
    z-index: -1;
    width: 100vw;
    height: 70vh;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 30px;
  @media (max-width: 768px) {
    padding: 0px 0px;
    width: 100vw;
  }
`;
export default CenterCat;
