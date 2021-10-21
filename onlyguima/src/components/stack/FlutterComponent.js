import React from "react";

export default function FlutterComponent(props) {
  return (
    <React.Fragment>
      <img className="techStack" src={`${props.flutter}.png`}></img>
    </React.Fragment>
  );
}
