import React, { useState, useEffect } from "react";

import CvCard from "./CvCard";

const TechTools = ({ tools }) => {
  return (
    <CvCard>
      <h1 className="cv-heading">Tech tools</h1>
      <div className="tech-list">
        {tools.map((tool, index) => (
          <ProgressLine
            key={index}
            icon={tool.icon}
            name={tool.techName}
            visualParts={[
              {
                percentage: `${tool.percentage}%`,
                color: "#049583",
              },
            ]}
          />
        ))}
      </div>
    </CvCard>
  );
};

const ProgressLine = ({
  icon,
  name,
  visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ],
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <div className="tool-progressbar">
      <div
        className={[
          "tech-icon",
          name === "google-analytics" ? "google-icon" : "",
        ].join(" ")}
      >
        <img src={icon} alt={name} />
      </div>
      <div
        className="progress-visual-full"
        style={{
          backgroundColor: "#D9D9D9",
          height: "19.15px",
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color,
                height: "100%",
              }}
              className="progress-visual-part"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechTools;
