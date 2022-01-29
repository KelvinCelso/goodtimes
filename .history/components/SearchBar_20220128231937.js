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
    color: "white",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    borderRadius: 20,
    height: 40,
    display: "none",
  },
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <Container>
      <Autocomplete
        style={{
          borderRadius: "30px",
          height: "40px",
        }}
        disablePortal
        id="combo-box-demo"
        options={""}
        label="pesquisar"
        sx={{ width: 300 }}
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
