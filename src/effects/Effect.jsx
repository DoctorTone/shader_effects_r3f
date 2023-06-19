import React, { Suspense } from "react";
import BlockAnimation from "../shaders/BlockAnimation.jsx";
import Pattern1 from "../shaders/Pattern1.jsx";
import Pattern2 from "../shaders/Pattern2.jsx";
import Rings from "../components/Rings.jsx";
import FlipBook from "../shaders/FlipBook.jsx";
import Holes from "../shaders/Holes.jsx";
import SteelBunny from "../components/SteelBunny.jsx";

const Effect = ({ name }) => {
  return (
    <>
      {name === "block" && <BlockAnimation />}
      {name === "pattern1" && <Pattern1 />}
      {name === "pattern2" && <Pattern2 />}
      {name === "flip" && <FlipBook />}
      {name === "rings" && <Rings />}
      {name === "holes" && <Holes />}
      {name === "pbr" && <SteelBunny />}
    </>
  );
};

export default Effect;
