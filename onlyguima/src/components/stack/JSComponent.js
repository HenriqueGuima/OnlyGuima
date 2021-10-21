import React from "react";

export default function JSComponent(props) {
  return (
    <React.Fragment>
      <img className="techStack" src={`${props.js}.png`}></img>
    </React.Fragment>
  );
}
