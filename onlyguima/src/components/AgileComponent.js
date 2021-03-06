import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";
import WpComponent from "./stack/WpComponent";
import OutSystemsComponent from "./stack/OutSystemsComponent";
import OpenCartComponent from "./stack/OpenCartComponent";

const useStyles = makeStyles((theme) => ({
  glass: {
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    "&:active": {
      transform: "rotateY(180deg)",
      backfaceVisibility: "hidden",
    },
    width: "50% !important",
    marginTop: "25em",
    borderRadius: 20,
    backdropFilter: "blur(10px)",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
    boxShadow: "10px ​10px 12px -9px rgb(30 30 30 / 16%)",
    borderLeft: "solid 1px rgba(255, 255, 255, 0.3)",
    borderTop: "solid 1px rgba(255, 255, 255, 0.5)",
    // borderStyle: "solid",
    // borderWidth: " 0.5px",
    // borderImage: "linear-gradient(145deg, rgb(91,148,168), rgb(226,165,134)) 1",
  },
  title: { paddingBlock: "1em" },
  role: { paddingBottom: "1em" },
}));

export default function ContentComponent(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Container className={classes.glass}>
        <Typography className={classes.title}>
          Érre Design & Editorial
        </Typography>

        <Typography>@</Typography>
        <Typography className={classes.title}>Grupo Érre</Typography>

        <Typography className={classes.role}>Developer</Typography>
      </Container> */}

      <label className="label-card">
        {/* <input type="checkbox" />
        <div class="card">
          <div class="front">
            <img src={`${props.src}.png`} className="card-image"></img>
            <br />
            <span className="card-text-empresa">{props.empresa}</span>
            <br />
            <span className="card-text-funcao">{props.funcao}</span>
          </div>
          <div class="back">{props.funcao}</div>
        </div> */}

        <div className="container">
          <div className="card">
            <div className="frente">
              <span class="card-text-funcao-ano">2020</span>
              <img src={`${props.src}.png`} className="card-image"></img>
              <br />
              <span className="card-text-empresa">{props.empresa}</span>
              <br />
              <span className="card-text-funcao">{props.funcao}</span>
            </div>

            <div className="tras">
              <span className="card-text-funcao">
                Web Development <br></br>
                <br></br>
                <span className="card-text-back">
                  Web development with technologies such as Wordpress and
                  OpenCart usually for E-Commerce websites. PWAs co-development
                  with OutSystems and webapps like digital restaurant menus in
                  C#.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <WpComponent wordpress={props.wordpress}></WpComponent>
          <OutSystemsComponent
            outsystems={props.outsystems}
          ></OutSystemsComponent>
          <OpenCartComponent opencart={props.opencart}></OpenCartComponent>
        </div>
      </label>
    </React.Fragment>
  );
}
