import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  foto: {
    borderRadius: "150px",
    backgroundColor: "black",
    "&:hover": { backgroundColor: "gray" },
    width: "3em !important",
    height: "3em",
  },
}));

export default function HeaderComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Box>
          <nav class="menu">
            <input
              type="checkbox"
              href="#"
              class="menu-open"
              name="menu-open"
              id="menu-open"
            />
            <label class="menu-main" for="menu-open"></label>

            <a href="#" class="menu-item cat">
              {" "}
              <i class="fa fa-anchor"></i>{" "}
            </a>
            <a href="#" class="menu-item cinema">
              {" "}
              <i class="fa fa-coffee"></i>{" "}
            </a>
            <a href="#" class="menu-item music">
              {" "}
              <i class="fa fa-heart"></i>{" "}
            </a>
            <a href="#" class="menu-item nature">
              {" "}
              <i class="fa fa-microphone"></i>{" "}
            </a>
            <a href="#" class="menu-item shutter">
              {" "}
              <i class="fa fa-star"></i>{" "}
            </a>
            <a href="#" class="menu-item vegetarian">
              {" "}
              <i class="fa fa-diamond"></i>{" "}
            </a>
          </nav>
        </Box>
      </Container>
    </React.Fragment>
  );
}
