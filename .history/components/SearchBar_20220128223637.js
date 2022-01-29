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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  Box: {
    cursor: pointer,
  },
}));

function SearchBar() {
  return (
    <>
      <Box display="flex">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <SearchIcon color="white" />
      </Box>
    </>
  );
}

export default SearchBar;
