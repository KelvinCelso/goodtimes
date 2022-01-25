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
  Drawer,
  AppBar,
  IconButton,
} from "@mui/material";

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
  const classe = useStyles();
  const [opens, setOpens]=useState(false)
  return <div></div>;
}

export default SideMenu;
