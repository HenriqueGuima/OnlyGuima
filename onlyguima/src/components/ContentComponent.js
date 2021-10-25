import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";
import WpComponent from "./stack/WpComponent";
import BootstrapComponent from "./stack/BootstrapComponent";
import ReactComponent from "./stack/ReactComponent";
import FlutterComponent from "./stack/FlutterComponent";
import MysqlComponent from "./stack/MySQL";

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
          <div class="back">
            <span className="card-text-funcao">
              {props.funcao}
              <br></br>
            </span>
            <span className="card-text-funcao">
              Web Development <br></br>
              <span className="card-text-back">
                Website and Webapps development with tools like Wordpress,
                Bootstrap, React and MySQL for database
              </span>
              <br></br>
            </span>
            <span className="card-text-funcao">
              Mobile Development<br></br>
            </span>
            <span className="card-text-funcao">
              Team Management<br></br>
            </span>
            <span className="card-text-funcao">
              Project Management<br></br>
            </span>
          </div>
        </div> */}

        <div className="container">
          <div className="card">
            <div className="frente">
              <span class="card-text-funcao-ano">2021</span>
              <img src={`${props.src}.png`} className="card-image"></img>
              <br />
              <span className="card-text-empresa">{props.empresa}</span>
              <br />
              <span className="card-text-funcao">{props.funcao}</span>
            </div>

            <div className="tras">
              {/* <span className="card-text-funcao">
                Web and Mobile Developer
                <br></br>
                
                <br></br>
              </span> */}
              <span className="card-text-funcao">
                Web Development <br></br>
                <br></br>
                <span className="card-text-back">
                  Website and Webapps development with tools like Wordpress,
                  Bootstrap, React and MySQL for database.
                </span>
                <br></br>
              </span>
              <span className="card-text-funcao">
                Mobile Development<br></br>
                <br></br>
                <span className="card-text-back">
                  Mobile apps development in Flutter not only for Android
                  devices but also iOS. Usage of APIs such as Google Places to
                  place objects in a Google Maps feature.
                </span>
              </span>
              <span className="card-text-funcao">
                Team Management<br></br>
                <br></br>
                <span className="card-text-back">
                  Projects distribution throughout the team, conducting
                  meetings, orientation and leadership.
                </span>
              </span>
            </div>
          </div>
          <WpComponent wordpress={props.wordpress}></WpComponent>
          <BootstrapComponent bootstrap={props.bootstrap}></BootstrapComponent>
          <ReactComponent react={props.react}></ReactComponent>
          <FlutterComponent flutter={props.flutter}></FlutterComponent>
          <MysqlComponent mysql={props.mysql}></MysqlComponent>
        </div>
      </label>
    </React.Fragment>
  );
}
