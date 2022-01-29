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
  text: {},
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <Container>
      <Autocomplete
        disablePortal
        options={""}
        label="pesquisar"
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pesquisar"
            className={classes.text}
            variant="outlined"
          />
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
