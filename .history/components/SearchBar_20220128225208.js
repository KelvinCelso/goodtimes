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
  Box: {
    cursor: pointer,
  },
  Autocomplete: {
    border: "20px solid white",
  },
}));

function SearchBar() {
  return (
    <Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pesquisar" />}
      />
      <SearchIcon />
    </Container>
  );
}
const Container = styled.div``;
export default SearchBar;
