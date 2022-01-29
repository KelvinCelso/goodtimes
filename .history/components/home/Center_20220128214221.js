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
import { TextField } from "@material-ui/core";
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
        <TextField id="outlined-basic" label="Pesquisar" variant="outlined" />
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
  position: absolute;
  width: 98.2vw;
  align-items: center;
  display: flex;
  justify-content: center;
  top: 120px;
  #outlined-basic {
    border: white;
  }
  .icon {
    color: white;
    margin-left: 10px;
  }
`;

export default Center;
