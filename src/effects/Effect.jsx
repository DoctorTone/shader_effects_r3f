import React from "react";
import { Box } from "../components/Box.jsx";
import { Sphere } from "@react-three/drei";
import { Tube } from "@react-three/drei";

const Effect = ({ name }) => {
  return (
    <>
      {name === "block" && <Box />}
      {name === "pattern" && <Sphere />}
      {name === "flip" && <Tube />}
    </>
  );
};

export default Effect;
