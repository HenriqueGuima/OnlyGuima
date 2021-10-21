import React from "react";

export default function CSSComponent(props) {
  return (
    <React.Fragment>
      <img className="techStack" src={`${props.sqlite}.png`}></img>
    </React.Fragment>
  );
}
