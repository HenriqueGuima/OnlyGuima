import React from "react";

export default function WpComponent(props) {
  return (
    <React.Fragment>
      <img className="techStack" src={`${props.wordpress}.png`}></img>
    </React.Fragment>
  );
}
