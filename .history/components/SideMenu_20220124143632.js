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
  const classes = useStyles();
  const [opens, setOpens] = useState(false);
  return;
  <Container className={classes.root}>
    <Drawer open={opens} onClose={() => setOpens(false)}>
      <Box
        display="flex"
        p={4}
        mt={5}
        justifyContent="space-between"
        fontWeight={500}
      >
        <Typography></Typography>
      </Box>
    </Drawer>
    <AppBar style={{ background: "#2E3855" }}>
      <Toolbar>
        <Typography type="title" color="inherit" style={{ flex: 1 }}>
          Home
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={() => setOpens()}
        >
          <DehazeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Container>;
}

export default SideMenu;
