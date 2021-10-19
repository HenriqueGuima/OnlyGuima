import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Container } from "@material-ui/core";
import HeaderComponent from "./components/HeaderComponent";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
    </React.Fragment>
  );
}

export default App;
