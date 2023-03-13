import React from "react";
import BlockAnimation from "../shaders/BlockAnimation.jsx";
import { Sphere } from "@react-three/drei";
import { Tube } from "@react-three/drei";
import Rings from "../components/Rings.jsx";

const Effect = ({ name }) => {
  return (
    <>
      {name === "block" && <BlockAnimation />}
      {name === "pattern" && <Sphere />}
      {name === "flip" && <Tube />}
      {name === "rings" && <Rings />}
    </>
  );
};

export default Effect;
