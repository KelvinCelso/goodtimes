import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appBarTransparent: {
    backgroundColor: "rgba(67, 129, 168,0.5)",
  },
  appBarSolid: {
    backgroundColor: "rgba(67, 129, 168)",
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };6++
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="black">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
