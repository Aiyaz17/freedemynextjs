import React from "react";
import { Lottie } from "@crello/react-lottie";

import loadingLottie from "../public/loading.json";
function Loading(props) {
  return (
    <div
      style={{
        display: "flex",

        minHeight: props.loadingScreenHeight,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Lottie
          style={{ maxWidth: props.maxWidth }}
          config={{ animationData: loadingLottie, autoplay: true, loop: true }}
        />
      </div>
    </div>
  );
}
export default Loading;
