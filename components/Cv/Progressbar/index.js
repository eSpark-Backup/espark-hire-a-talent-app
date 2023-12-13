import React from "react";

import { easeQuadInOut } from "d3-ease";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "./AnimatedProgressProvider";
import GradientSVG from "./GradientSVG";

const ProgressBar = (props) => {
  const { endValue } = props;

  const idCSS = "progress";

  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={endValue}
      duration={2}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);

        return (
          <>
            <GradientSVG />
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={{
                path: {
                  stroke: `url(#${idCSS})`,
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  transformOrigin: "center center",
                  background:
                    "linear-gradient(267.26deg, #049583 20.76%, rgba(140, 129, 129, 0) 81.3%)",
                },

                trail: {
                  stroke: "#BCCCBF",
                  strokeLinecap: "butt",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#000000",
                  fontSize: "26px",
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                },
                background: {
                  fill: "#049583",
                },
              }}
            />
          </>
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default ProgressBar;
