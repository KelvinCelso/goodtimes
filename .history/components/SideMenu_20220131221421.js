import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import styled, { css } from "styled-components";
import Link from "next/link";
import { createStyles, makeStyles } from "@material-ui/styles";
import {
  Container,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  Drawer,
  AppBar,
  IconButton,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { async } from "@firebase/util";
import {
  selectUserName,
  selectUSerLoginDetails,
  selectUserEmail,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import UseWindowSize from "../hooks/UseWindowSize";
import UseWindowScroll from "../hooks/UseWindowScroll";
import { useRecoilValue } from "recoil";
import DropDownMenu from "./DropDownMenu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useRecoilState } from "recoil";
import { catState } from "../atoms/pageAtoms";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  drawer: {
    width: 300,
    marginTop: 0,
  },
  iconAlign: {
    marginLeft: 160,
  },
  ListItem: {
    marginTop: 10,
    color: "#fff",
    cursor: "pointer",
    letterSpacing: "1.42px",
    lineHeight: "1.08",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    lineHeight: "50px",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#E03D4E",
    },
  },
  Box: {
    cursor: "pointer",
  },
  content: {
    padding: theme.spacing(9),
  },
  paper: {
    background: "rgb(259, 259, 259, 0.1)",
    backdropFilter: "blur(8px)",
  },
  Head: {
    color: "#fff",
    cursor: "default",
    letterSpacing: "1.42px",
    lineHeight: "1.08",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    justifyContent: "center",
    justifyItems: "center",
  },
  AppBar: {
    background: "transparent",
    transition: "all 0.3s ease",
    padding: "10px 0",
    width: "100%",
  },
  AppBarActive: {
    background: "#E03D4E",
    transition: "all 0.3s ease",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.288)",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

function SideMenu(props) {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [opendrop, setOpenDrop] = useState(0);
  const [navBar, setNavbar] = useState(false);
  const [height, width] = UseWindowSize();
  const position = UseWindowScroll();
  const [cate, setCate] = useRecoilState(catState);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [userName]);
  useEffect(() => {
    if (width > 970) {
      setOpens(false);
    }
  }, [width]);
  useEffect(() => {
    if (position > 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [position]);

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
    <Container className={classes.root}>
      <Drawer
        classes={{ paper: classes.paper }}
        open={opens}
        onClose={() => setOpens(false)}
      >
        <Box display="flex" p={4} mt={5} fontWeight={500} alignItems="center">
          {userName ? (
            <>
              <SignOut
                onClick={() => {
                  if (opendrop == 0) {
                    setOpenDrop(1);
                  } else {
                    setOpenDrop(0);
                  }
                }}
              >
                <Avatar alt={userName} src={userPhoto} />
                <Typography className={classes.Head}>
                  <Box mt={0} ml={3} fontWeight="fontWeightBold">
                    <p style={{ cursor: "pointer" }}>{userName}</p>
                  </Box>
                </Typography>
                <DropDown display={opendrop} onClick={handleAuth}>
                  <ExitToAppIcon className="icons" />
                  <span>Sign Out</span>
                </DropDown>
              </SignOut>
            </>
          ) : (
            <>
              <SignIndiv>
                <AccountCircleIcon className="icon" />
                <a onClick={handleAuth}> Entrar </a>
              </SignIndiv>
            </>
          )}
        </Box>

        <List className={classes.drawer}>
          <Link href="/">
            <ListItem className={classes.ListItem}>
              <HomeIcon className="icons" />
              <Box pl={1} type="paragraph" color="inherit">
                <span>Pagina Principal</span>
              </Box>
            </ListItem>
          </Link>

          <ListItem button className={classes.ListItem}>
            <StackedLineChartIcon className="icons" />
            <Box pl={1} type="paragraph" color="inherit">
              <span>Ranquing</span>
            </Box>
          </ListItem>

          <ListItem button className={classes.ListItem}>
            <PublicIcon className="icons" />
            <Box pl={1} type="paragraph" color="inherit">
              <span>Publicidade</span>
            </Box>
          </ListItem>
          <ListItem button className={classes.ListItem}>
            <StarIcon className="icons" />
            <Box pl={1} type="paragraph" color="inherit">
              <span>Favoritos</span>
            </Box>
          </ListItem>

          <Link href="categorias">
            <ListItem
              className={classes.ListItem}
              onClick={() => {
                setCate("restaurante");
              }}
            >
              <RestaurantIcon className="icons" />
              <Box pl={1} type="paragraph" color="inherit">
                <span>Restaurante</span>
              </Box>
            </ListItem>
          </Link>

          <Link href="categorias">
            <ListItem
              className={classes.ListItem}
              onClick={() => {
                setCate("bar");
              }}
            >
              <LocalBarIcon className="icons" />
              <Box pl={1} type="paragraph" color="inherit">
                <span>Bar</span>
              </Box>
            </ListItem>
          </Link>

          <Link href="categorias">
            <ListItem
              className={classes.ListItem}
              onClick={() => {
                setCate("diversao");
              }}
            >
              <CheckroomIcon className="icons" />
              <Box pl={1} type="paragraph" color="inherit">
                <span>Diversao</span>
              </Box>
            </ListItem>
          </Link>

          <Link href="categorias">
            <ListItem
              className={classes.ListItem}
              onClick={() => {
                setCate("comercial");
              }}
            >
              <EmojiEmotionsIcon className="icons" />
              <Box pl={1} type="paragraph" color="inherit">
                <span>Comercial</span>
              </Box>
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <AppBar
        className={navBar ? classes.AppBarActive : classes.AppBar}
        elevation={0}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Header />
          <MediaButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={() => {
                setOpens(true);
                setOpenDrop(0);
              }}
            >
              <DehazeIcon />
            </IconButton>
          </MediaButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

const MediaButton = styled.div`
  display: none;
  @media (max-width: 970px) {
    display: inherit;
  }
`;

const SignIndiv = styled.div`
  display: flex;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1.42px;
  line-height: 1.08;
  text-transform: uppercase;
  align-items: center;

  .icon {
    font-size: 50px;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
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
  opacity: ${(props) => props.display};
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  justify-content: center;

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
`;

export default SideMenu;
