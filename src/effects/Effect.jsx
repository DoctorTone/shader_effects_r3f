import React from "react";
import BlockAnimation from "../shaders/BlockAnimation.jsx";
import { Sphere } from "@react-three/drei";
import Rings from "../components/Rings.jsx";
import FlipBook from "../components/FlipBook.jsx";

const Effect = ({ name }) => {
  return (
    <>
      {name === "block" && <BlockAnimation />}
      {name === "pattern" && <Sphere />}
      {name === "flip" && <FlipBook />}
      {name === "rings" && <Rings />}
    </>
  );
};

export default Effect;
