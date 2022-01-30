import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function DropDownMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <a href="/categorias">Restaurante</a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a href="">Bar</a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a href="">Diversao</a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a href="">Comercial</a>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
