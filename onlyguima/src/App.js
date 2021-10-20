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
      <Container className="glassContainer1" maxWidth={false}>
        <ContentComponent></ContentComponent>
      </Container>
      <Container className="glassContainer2" maxWidth={false}>
        <ContentComponent></ContentComponent>
      </Container>
      <Container className="glassContainer3" maxWidth={false}>
        <ContentComponent></ContentComponent>
      </Container>
      <Container className="glassContainer4" maxWidth={false}>
        <ContentComponent></ContentComponent>
      </Container>
    </React.Fragment>
  );
}

export default App;
