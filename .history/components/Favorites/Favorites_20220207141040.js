import React, { useEffect } from "react";
import styled from "styled-components";
import Liked from "./Liked";
import DetailsFav from "./DetailsFav";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUserID, selectUserName } from "../../features/user/userSlice";

function Favorites(props) {
  const uid = useSelector(selectUserID);
  const [fav, setFavs] = useState({});
  const userName = useSelector(selectUserName);
  useEffect(() => {
    getDoc(doc(db, "user", uid)).then((doc) => {
      setFavs(doc.data());
    });
  }, [userName]);

  return (
    <Container>
      <Content>
        {/* <Head></Head> */}
        <Liked />
        <DetailsFav />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 1;
  width: 100vw;
`;
const Head = styled.div`
  display: black;
  height: 70px;
  width: 100vw;
  background-color: black;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 800px) {
    display: grid;
    align-items: center;
    justify-items: center;

    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
export default Favorites;
