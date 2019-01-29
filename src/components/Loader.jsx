import React from "react";
import loader from "../assets/loading.svg";
import whiteLoader from "../assets/images/loading-white.svg";

const Loader = props => {
  return (
    <img
      src={props.inverted ? whiteLoader : loader}
      alt="Loading"
      height={props.size}
      width={props.size}
    />
  );
};

export default Loader;
