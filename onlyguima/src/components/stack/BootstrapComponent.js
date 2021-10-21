import React from "react";

export default function BootstrapComponent(props) {
  return (
    <React.Fragment>
      <img className="techStack" src={`${props.bootstrap}.png`}></img>
    </React.Fragment>
  );
}
