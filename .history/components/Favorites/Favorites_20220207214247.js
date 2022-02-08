import { useEffect, useState } from "react";
import styled from "styled-components";
import Liked from "./Liked";
import DetailsFav from "./DetailsFav";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUserID, selectUserName } from "../../features/user/userSlice";
import ItemsFav from "./ItemsFav";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteState, uidState } from "../../atoms/ItemsAtoms";

function Favorites(props) {
  const [favs, setFavs] = useState([]);
  const userName = useSelector(selectUserName);
  const uid = useRecoilValue(uidState);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "user", uid);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          setFavs(doc.data().liked);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userName]);

  const handle = (data) => {
    setCurrent(data), console.log(current);
  };

  return (
    <Container>
      <Content>
        {/* <Head></Head> */}
        <LikeContainer>
          {favs.map((doc) => (
            <ItemsFav
              onClick={setCurrent(doc)}
              key={doc.name}
              name={doc.name}
              image={doc.image?.[0]}
            />
          ))}
        </LikeContainer>

        <DetailsFav
          name={current.name}
          image={current.image?.[0]}
          location={current.location}
        />
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
const LikeContainer = styled.div`
  margin-right: 20px;
`;
export default Favorites;
