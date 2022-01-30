import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { createStyles, makeStyles } from "@material-ui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";

const Content = styled.nav`
  display: flex;
  div {
    padding: 10px 10px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      font-weight: 500;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: center center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
      .icons {
        opacity: 1;
      }
    }
    .icons {
      width: 20px;
      color: white;
      margin-right: 10px;
      opacity: 0;
    }
    @media (max-width: 1128px) {
      margin-right: 0px;
    }

    @media (max-width: 1050px) {
      padding: 10px 5px;
      .icons {
        margin-right: 5px;
      }
    }
    @media (max-width: 1020px) {
      margin-right: 0px;
    }
    @media (max-width: 970px) {
      margin-right: 0px;
      display: none;
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const ContentInside = styled.div`
  display: flex;

  .bg {
    /* backdrop-filter: blur(5px); */
    background-color: red;
  }
`;

export default function DropDownMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Content>
          <div
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <KeyboardArrowDownIcon className="icons" />
            <span>Categorias</span>
          </div>
        </Content>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <ContentInside>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <a href="/categorias">
                          <span>Restaurante</span>
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a href="#">
                          <span>Bar</span>
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a href="#">
                          <span>Diversao</span>
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a href="#">
                          <span>Comercial</span>
                        </a>
                      </MenuItem>
                    </MenuList>
                  </ContentInside>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
