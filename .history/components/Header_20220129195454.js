import styled, { css } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import SideMenu from "./SideMenu";
import DropDownMenu from "./DropDownMenu";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  selectUserName,
  selectUSerLoginDetails,
  selectUserEmail,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { async } from "@firebase/util";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [userName]);
  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (userName) {
      signOut(auth, provider)
        .then(() => {
          dispatch(setSignOutState());
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
    console.log("this is the user", user);
  };

  return (
    <Container>
      <LogoContainer>
        Good<span>Times</span>
      </LogoContainer>
      <Navbar>
        <a href="/">
          <HomeIcon className="icons" />
          <span>Pagina Principal</span>
        </a>

        <a href="#">
          <StackedLineChartIcon className="icons" />
          <span>Ranquing</span>
        </a>
        <a href="#">
          <PublicIcon className="icons" />
          <span>Publicidade</span>
        </a>
        <a href="#">
          <StarIcon className="icons" />
          <span>Favoritos</span>
        </a>
        <a href="">
          <DropDownMenu />
        </a>
      </Navbar>

      {!userName ? (
        <SignIndiv>
          <button onClick={handleAuth}>Entrar</button>
        </SignIndiv>
      ) : (
        <SignOut>
          <UserWrap>
            <span>{userName}</span>
            <Avatar alt={userName} src={userPhoto} />
          </UserWrap>
          <DropDown onClick={handleAuth}>
            <ExitToAppIcon className="icons" />
            <span>Sign Out</span>
          </DropDown>
        </SignOut>
      )}
    </Container>
  );
}
const Container = styled.div`
  color: black;
  top: 0;
  display: flex;
  background-color: none;
  color: white;
  align-items: center;
  z-index: 1;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  /* box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31); */
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    justify-content: space-between;
    .icon {
      display: inherit;
    }
  }
`;

const Content = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-items: space-between;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 40px;
  .icon {
    width: 40px;
    height: 30px;
    color: white;
    margin-right: 10px;
    opacity: 0;
    &:hover {
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    .icon {
      opacity: 1;
    }
  }
`;

const Navbar = styled.nav`
  margin: 20px;
  margin-left: 20px;
  display: flex;
  a {
    text-decoration: none;
    padding: 10px 10px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      font-weight: 500;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: center center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
      .icons {
        opacity: 1;
      }
    }
    .icons {
      width: 20px;
      color: white;
      margin-right: 10px;
      opacity: 0;
    }

    @media (max-width: 1128px) {
      margin-right: 0px;
    }

    @media (max-width: 1050px) {
      padding: 10px 5px;
      .icons {
        margin-right: 5px;
      }
    }
    @media (max-width: 1020px) {
      margin-right: 0px;
    }
    @media (max-width: 970px) {
      margin-right: 0px;
      display: none;
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  font-size: 1.8em;
  font-weight: 700;
  margin-right: 20px;
  text-shadow: 1px 2px 5px #000;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SignIndiv = styled.div`
  display: flex;
  background-color: none;
  button {
    border: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    background: none;
    border-radius: 6px;
    width: 100px;
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    .icone {
      display: none;
    }
    &:hover {
      border: 2px solid white;
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
  @media (max-width: 970px) {
    display: none;
  }
`;
const UserWrap = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 1020px) {
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    span {
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      display: none;
    }
  }
  @media (max-width: 970px) {
    display: none;
  }
`;
const DropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  letter-spacing: 2px;
  font-size: 14px;
  padding: 10px;
  width: 150px;
  opacity: 0;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

  @media (max-width: 970px) {
    display: none;
  }
`;

export default Header;
