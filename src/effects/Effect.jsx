import React from "react";
import BlockAnimation from "../shaders/BlockAnimation.jsx";
import Pattern from "../shaders/Pattern.jsx";
import Rings from "../components/Rings.jsx";
import FlipBook from "../shaders/FlipBook.jsx";

const Effect = ({ name }) => {
  return (
    <>
      {name === "block" && <BlockAnimation />}
      {name === "pattern" && <Pattern />}
      {name === "flip" && <FlipBook />}
      {name === "rings" && <Rings />}
    </>
  );
};

export default Effect;
