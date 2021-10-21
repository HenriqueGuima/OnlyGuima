import React from "react";

export default function HTMLComponent(props) {
  return (
    <React.Fragment>
      <img className="techStack" src={`${props.html}.png`}></img>
    </React.Fragment>
  );
}
