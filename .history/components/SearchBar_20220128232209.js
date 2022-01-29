import React from "react";
import { createStyles, makeStyles } from "@material-ui/styles";
import {
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  Drawer,
  AppBar,
  IconButton,
  Avatar,
  Autocomplete,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  text: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",

    height: 40,
    border: "1px solid white",
  },
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={""}
        label="pesquisar"
        renderInput={(params) => (
          <TextField {...params} label="Pesquisar" className={classes.text} />
        )}
      />
      <SearchIcon className="icon" />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  .icon {
    color: white;
  }
`;
export default SearchBar;