import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const GaugeChart = ({ gaugeData, outerRadius, innerRadius }) => {
  const svgRef = useRef();
  const margin = {
    top: 30,
    right: 15,
    bottom: 30,
    left: 15,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const data = [gaugeData.score, 100 - gaugeData.score];

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateCool)
    .domain([0, data.length]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    drawChart(svg);
  }, [data]);

  const drawChart = () => {
    d3.select("svg").select(".container").remove();

    // Create new svg
    const svg = d3
      .select(".container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .on("click", function (d, i, nodes) {
        console.log(gaugeData.name)
        d3.selectAll("svg").attr("class", null);
        d3.select(this).attr("class", "svg--selected");
        d3.select(this).select('path').attr("class", "arc__primary--selected")
      })
      .on("click", function (d, i, nodes) {
        console.log(gaugeData.name)
        d3.selectAll("svg").attr("class", null);
        d3.selectAll("svg").select("path").attr("class", null)
        d3.select(this).attr("class", "svg--selected");
        d3.select(this).select('path').attr("class", "arc__primary--selected")
      })

      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((data) => data);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .attr("class", (_, i) => (i === 0 ? "arc__primary" : "arc__secondary"))
      
      .style("stroke", "black")
      .style("stroke-width", 0);

    // Append text labels
    arc
      .append("text")
      .attr("class", "arc__text arc__name")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text(gaugeData.name);

    arc
      .append("text")
      .attr("class", "arc__text arc__score")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text(gaugeData.score + "%");

    arc
      .append("text")
      .attr("class", "arc__text arc__vsly")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text("N/A");

    arc
      .append("text")
      .attr("class", "arc__text arc__sample")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text(`Sample: ${gaugeData.sample}`);
  };

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default GaugeChart;