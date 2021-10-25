import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Container } from "@material-ui/core";
import HeaderComponent from "./components/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import AgileComponent from "./components/AgileComponent";
import WeMakeItComponent from "./components/WeMakeItComponent";
import CMComponent from "./components/CMComponent";

function App() {
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      <Container className="glassContainer1" maxWidth={false}>
        <ContentComponent
          empresa="Érre Design & Editorial, Lda @ Grupo Érre"
          funcao="Web and Mobile Developer"
          src="https://designstation.pt/wp-content/uploads/2019/09/logo"
          wordpress="https://s.w.org/style/images/about/WordPress-logotype-wmark-white"
          bootstrap="https://imgur.com/EDD10Iu"
          react="https://i.imgur.com/0xKX17U.png"
          flutter="https://imgur.com/QP1tzNU"
          mysql="https://imgur.com/26TVszy"
        ></ContentComponent>
      </Container>
      <Container className="glassContainer2" maxWidth={false}>
        <AgileComponent
          empresa="Agile Cloud Solutions"
          funcao="Web Developer"
          src="https://agileincloud.com/images/agile"
          wordpress="https://s.w.org/style/images/about/WordPress-logotype-wmark-white"
          outsystems="https://imgur.com/stI1tdI.png"
          opencart="https://imgur.com/dow1Z2E"
        ></AgileComponent>
        {/* <ContentComponent
          empresa="Agile Cloud Solutions"
          funcao="Web Developer"
          src="https://agileincloud.com/images/agile"
        ></ContentComponent> */}
      </Container>
      <Container className="glassContainer3" maxWidth={false}>
        <CMComponent
          empresa="C2MSIS"
          funcao="Software Developer"
          src="https://c2msis.pt/wp-content/uploads/2019/04/cropped-logo-4"
          csharp="https://imgur.com/Pjx2XOz"
          sqlite="https://imgur.com/wFA3vqu"
        ></CMComponent>
        {/* <ContentComponent
          empresa="C2MSIS"
          funcao="Software Developer"
          src="https://c2msis.pt/wp-content/uploads/2019/04/cropped-logo-4"
        ></ContentComponent> */}
      </Container>
      <Container className="glassContainer4" maxWidth={false}>
        <WeMakeItComponent
          empresa="We Make It"
          funcao="Web Development as an Intern"
          src="https://imgur.com/aRnTiGJ.png"
          js="https://s.w.org/style/images/about/WordPress-logotype-wmark-white"
          html="https://imgur.com/stI1tdI.png"
          css="https://imgur.com/dow1Z2E"
          csharp="https://imgur.com/Pjx2XOz"
          mapsAPI="https://imgur.com/CrRC3om"
        ></WeMakeItComponent>
        {/* <ContentComponent
          empresa="We Make It"
          funcao="Web Development as an Intern"
          src="https://farmamais.pt/wp-content/uploads/2020/02/logotipo-WEMAKEIT-547x300"
          // style={{ maxWidth: "200px !important" }}
        ></ContentComponent> */}
      </Container>
      {/* <Container className="glassContainer5" maxWidth={false}>
        <ContentComponent
          empresa="Mobiware"
          funcao="Mobile Development as an Intern"
          src="./assets/download"
        ></ContentComponent>
      </Container> */}
    </React.Fragment>
  );
}

export default App;
