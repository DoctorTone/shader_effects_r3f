import React, { Suspense } from "react";
import BlockAnimation from "../shaders/BlockAnimation.jsx";
import Pattern1 from "../shaders/Pattern1.jsx";
import Pattern2 from "../shaders/Pattern2.jsx";
import Rings from "../components/Rings.jsx";
import FlipBook from "../shaders/FlipBook.jsx";
import SteelBunny from "../components/SteelBunny.jsx";
import { Loading } from "../components/Loading.jsx";

const Effect = ({ name }) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {name === "block" && <BlockAnimation />}
        {name === "pattern1" && <Pattern1 />}
        {name === "pattern2" && <Pattern2 />}
        {name === "flip" && <FlipBook />}
        {name === "rings" && <Rings />}
        {name === "pbr" && <SteelBunny />}
      </Suspense>
    </>
  );
};

export default Effect;
