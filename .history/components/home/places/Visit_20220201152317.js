import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { itemState } from "../../../atoms/ItemsAtoms";
import { useRouter } from "next/router";
function Visit(props) {
  const [items, setItems] = useRecoilState(itemState);
  const router = useRouter();

  const itemPages = (id, e) => {
    e.stopPropagation();
    router.push(`/details/${id}`);
  };

  return (
    <Container>
      <Content>
        <Wrap
          onClick={() => {
            (e) => itemPages(props.id, e);
          }}
        >
          <img src={props.image} />
          <span>{props.name}</span>
          <p>{props.address}</p>
        </Wrap>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-right: 25px;
  border-radius: 6px;
  height: 400px;
  width: 265px;
  margin-bottom: 60px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(219, 219, 219, 0.8);
  box-shadow: rgb(0 0 0/ 69%) 0px 16px 20px -10px,
    rgb(0 0 0 / 73%) 0px 9px 5px -10px;

  &:hover {
    box-shadow: rgb(0 0 0/ 73%) 0px 24px 30px -16px,
      rgb(0 0 0 / 72%) 0px 25px 17px -10px;
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 275px;
    border-start-end-radius: 6px;
    border-start-start-radius: 6px;
    margin-bottom: 20px;
    box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -3px 14px 30px 2px rgba(0, 0, 0, 0.23);
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 5);
  }
  span {
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    height: 45vh;
    width: 50vw;
    margin-bottom: 60px;
    margin-right: 0px;
    padding: 0px;

    img {
      width: 45vw;
      height: 200px;
    }
  }
`;

export default Visit;
