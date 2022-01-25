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

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

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
    transition: "all 1s ease",
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

  useEffect(() => {
    if (getWindowDimensions() < 768) {
      setOpens(false);
    }
  }, [third]);

  return (
    <Container className={classes.root}>
      <Drawer
        classes={{ paper: classes.paper }}
        open={opens}
        onClose={() => setOpens(false)}
      >
        <Box display="flex" p={4} mt={5} fontWeight={500} alignItems="center">
          <Avatar alt="Remy Sharp" src="/images/715151.png" />
          <Typography className={classes.Head}>
            <Box mt={0} ml={3} fontWeight="fontWeightBold">
              Kelvin Celso
            </Box>
          </Typography>
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
          <ListItem button className={classes.ListItem}>
            <InfoIcon className="icons" />
            <Box pl={1} type="paragraph" color="inherit">
              <span>Sobre</span>
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
  @media (max-width: 860px) {
    display: inherit;
  }
`;

export default SideMenu;
