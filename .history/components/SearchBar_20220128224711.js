import React from "react";
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
  Autocomplete,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  Box: {
    cursor: pointer,
  },
  Autocomplete: {
    borderRadius: "20px",
  },
}));

function SearchBar() {
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pesquisar" />}
      />
      <SearchIcon />
    </>
  );
}

export default SearchBar;
