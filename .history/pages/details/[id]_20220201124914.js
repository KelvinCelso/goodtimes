import styled from "styled-components";
import DetailsCenter from "../../components/Details/DetailsCenter";
import { Provider } from "react-redux";
import store from "../../app/store";
import Head from "next/head";
import SideMenu from "../../components/SideMenu";
import { db } from "../../firebase";
import { GetServerSideProps } from "next";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { async } from "@firebase/util";

export const getServerSideProps = async (ctx) => {
  const docRef = doc(db, "places", ctx.query.id);
  const data = getDoc(docRef);
  if (!data) return { notFound: true };
  return { props: { data } };
  console.log("this is data", data);
};

function details() {
  return (
    <Provider store={store}>
      <Head>
        <title>Details</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Container>
        <SideMenu />
        <DetailsCenter />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100;
  overflow: hidden;
  z-index: -1;
  background-color: black;
`;

export default details;
