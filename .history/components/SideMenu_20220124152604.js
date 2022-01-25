import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
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
} from "@mui/material";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
    marginTop: 100,
  },
  iconAlign: {
    marginLeft: 160,
  },
  ListItem: {
    marginTop: 10,
  },
  content: {
    padding: theme.spacing(9),
  },
}));

function SideMenu(props) {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);

  return (
    <Container className={classes.root}>
      <Drawer open={opens} onClose={() => setOpens(false)}>
        <Box
          display="flex"
          p={4}
          mt={5}
          justifyContent="space-between"
          fontWeight={500}
        >
          <Typography>
            <Box mt={2} fontWeight="fontWeightBold">
              Hello Mr
            </Box>
            <Box ml={1} fontWeight="fontWeightBold" fontSize={14}>
              E-mail: Nhatave10@gmail.com
            </Box>
          </Typography>
        </Box>

        <Box
          display="flex"
          p={1}
          mt={1}
          type="paragraph"
          bgcolor="#ebebeb"
          color="inherit"
          justifyContent="space-between"
          fontWeight={500}
        >
          <Typography style={{ padding: "20px" }}>
            <Box fontWeight="fontWeightBold">Bonus Deal</Box>
            <Box mt={1} fontSize={12}>
              Get More Detail
            </Box>
          </Typography>
        </Box>

        <List className={classes.drawer}>
          <ListItem button className={classes.ListItem}>
            <HomeIcon />
            <Box pl={1} type="paragraph" color="inherit">
              Service
            </Box>
          </ListItem>

          <ListItem button>
            <SearchIcon />
            <Box pl={1} type="paragraph" color="inherit">
              Rules
            </Box>
          </ListItem>

          <ListItem button className={classes.ListItem}>
            <HomeIcon />
            <Box pl={1} type="paragraph" color="inherit">
              Service
            </Box>
          </ListItem>

          <ListItem button>
            <SearchIcon />
            <Box pl={1} type="paragraph" color="inherit">
              Rules
            </Box>
          </ListItem>
        </List>
      </Drawer>

      <AppBar style={{ background: "#2E3855" margin: "0" }}>
        <Toolbar>
          <Header />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpens(true)}
          >
            <DehazeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default SideMenu;
