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
import SearchIcon from "@mui/icons-material/Search";
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
`;
const MenuContainer = styled.div`
  @media (max-width: 768px) {
  }
`;
const Pesquisar = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  align-items: center;
  background: white;
  position: absolute;
  top: 150px;
  input {
    height: 35px;
    width: 200px;
    border-radius: 5px;
    border: none;
    background-color: none;
    padding-left: 10px;
    :focus {
      outline: none;
    }
  }
  .icon {
    color: #e03d4e;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export default Center;
