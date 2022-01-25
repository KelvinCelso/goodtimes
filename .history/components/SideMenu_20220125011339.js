import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import styled, { css } from "styled-components";
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
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";

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
    letterSpacing: "1.42px",
    lineHeight: "1.08",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    lineHeight: "50px",
    transition: "all 0.3s ease",

    "&:hover": {
      color: "#0396a6",
    },
  },
  Box: {},
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
  },
}));

function SideMenu(props) {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

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
              <Avatar alt={userName} src={userPhoto} />
              <Typography className={classes.Head}>
                <Box mt={0} ml={3} fontWeight="fontWeightBold">
                  {userName}
                </Box>
              </Typography>
            </>
          ) : (
            <>
              <SignIndiv>
                <button> Entrar </button>
              </SignIndiv>
            </>
          )}
          <SignIndiv>
            <button> Entrar </button>
          </SignIndiv>
        </Box>

        <List className={classes.drawer}>
          <ListItem button className={classes.ListItem}>
            <HomeIcon className="icons" />
            <Box pl={1} type="paragraph" color="inherit">
              <span>Pagina Principal</span>
            </Box>
          </ListItem>

          <ListItem button className={classes.ListItem}>
            <SearchIcon className="icons" />
            <Box pl={1} type="paragraph" color="inherit">
              <span>Pesquisar</span>
            </Box>
          </ListItem>

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
        </List>
      </Drawer>

      <AppBar style={{ background: "#0396a6" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Header />
          <MediaButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={() => setOpens(true)}
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
  background-color: none;
  button {
    border: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    background: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      background-color: #fff;
      color: #0396a6;
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
  @media (max-width: 970px) {
    display: none;
  }
`;

export default SideMenu;
