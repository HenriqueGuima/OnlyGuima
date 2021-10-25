import { makeStyles } from "@mui/styles";
import React from "react";
import CsharpComponent from "./stack/CsharpComponent";
import SqliteComponent from "./stack/SqliteComponent";

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

      {/* <div className="card-blur"></div> */}
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
                {props.funcao}
                <br></br>
                <br></br>
                <span className="card-text-back">
                  Developed a program that would create a unique license key for
                  each machine depending on the data input in the WPF form and
                  specific machine components. Program is able to get info from
                  the machines components through extensive C# and SQL.
                </span>
              </span>
            </div>
          </div>
          <CsharpComponent csharp={props.csharp}></CsharpComponent>
          <SqliteComponent sqlite={props.sqlite}></SqliteComponent>
        </div>
      </label>
    </React.Fragment>
  );
}
