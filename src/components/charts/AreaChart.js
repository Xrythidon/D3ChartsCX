import React, { useEffect } from "react";
import * as d3 from "d3";

function AreaChart({ data, width, height }) {
  useEffect(() => {
    console.log(data);
    drawChart();
  }, [data]);

  function drawChart() {
    d3.select(".area__container").select("svg").remove();


    // Add logic to draw the chart here
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const yMinValue = d3.min(data, (d) => d.score);
    const yMaxValue = d3.max(data, (d) => d.score);

    const xMinValue = d3.min(data, (d, index) => index);
    const xMaxValue = d3.max(data, (d, index) => index);

    const svg = d3
      .select(".area__container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width]);

    const customScale = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.date))
      .range(data.map((d, i) => xScale(i)));

    const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    const area = d3
      .area()
      .x((d, index) => xScale(index))
      .y0(height)
      .y1((d) => yScale(d.score))
      .curve(d3.curveMonotoneX);

    const line = d3
      .line()
      .x((d, index) => xScale(index))
      .y((d) => yScale(d.score))
      .curve(d3.curveMonotoneX);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom().scale(customScale).tickSize(15));

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#0071c5")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add the area
    svg.append("path").datum(data).attr("class", "area").attr("d", area);

    // Area gradient
    const defs = svg.append("defs");

    const gradient = defs
      .append("linearGradient")
      .attr("id", "svgGradient")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("class", "start")
      .attr("offset", "10%")
      .attr("stop-color", "#0071c5")
      .attr("stop-opacity", 0.8);

    gradient
      .append("stop")
      .attr("class", "end")
      .attr("offset", "100%")
      .attr("stop-color", "#00aeef")
      .attr("stop-opacity", 0.2);

    // Circles
    const circle = svg
      .append("g")
      .selectAll("circle")
      .data(data)
      .enter()
     
     circle.append("circle")
      .attr("class", "circle")
      .attr("r", 8)
      .attr("cx", (d) => customScale(d.date))
      .attr("cy", (d) => yScale(d.score));
      

      circle
    //  .selectAll("circle")
      .append("text")
      .data(data)
      .attr("x", (d) => customScale(d.date))
      .attr("y", (d) => yScale(d.score))
      .attr("class", "circle__text")
      .attr("text-anchor", "middle")
      .attr("dx", "8px")
      .attr("dy", "-16px")
   //   .attr("alignment-baseline", "middle")
      .text((d) => d.score + "%");
  }

  return <div className="area__container" />;
}

export default AreaChart;
