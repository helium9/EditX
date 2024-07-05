import React from "react";
import HeatMap from "react-heatmap-grid";
import dynamic from "next/dynamic";

const Heatmap = dynamic(() => import("react-heatmap-grid"), { ssr: false });

export function HeatmapComponent({ data, xLabels, yLabels }) {
  const xLabelWidth = 60; // width of x-axis labels
  const yLabelWidth = 50; // width of y-axis labels

  return (
    <div>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        xLabelsLocation="bottom"
        xLabelsVisibility={(xLabelIndex) => xLabelIndex % 2 === 0} // shows every second label on x-axis
        yLabelsLocation="left"
        xLabelWidth={xLabelWidth}
        yLabelWidth={yLabelWidth}
        squares
        height={45}
        onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(255, 0, 0, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#444",
        })}
        cellRender={(value) => value && `${value}%`}
      />
    </div>
  );
}
