import React from "react";
import BlockAnimation from "../shaders/BlockAnimation.jsx";
import { Sphere } from "@react-three/drei";
import { Tube } from "@react-three/drei";

const Effect = ({ name }) => {
  return (
    <>
      {name === "block" && <BlockAnimation />}
      {name === "pattern" && <Sphere />}
      {name === "flip" && <Tube />}
    </>
  );
};

export default Effect;
