import React, { useEffect } from "react";
import * as d3 from "d3";

function AreaChart({data, width, height}) {
    

  useEffect(() => {
      console.log(data);
    drawChart();
  }, [data]);

  function drawChart() {
    d3.select(".area__container").select("svg").remove();
    d3.select(".area__container").select(".tooltip").remove();

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

    const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    const area = d3
      .area()
      .x((d) => xScale(d.label))
      .y0(height)
      .y1((d) => yScale(d.value));

    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Grid
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));
    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(""));
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(15));
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

    // Add the area
    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "red")
      .attr("fill-opacity", 0.5)
      .attr("d", area);

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 4)
      .attr("d", line);

      const focus = svg
      .append('g')
      .attr('class', 'focus')
      .style('display', 'none');

  focus.append('circle').attr('r', 5).attr('class', 'circle');

  const tooltip = d3
      .select('#container')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    svg
      .append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .style("opacity", 0)
      .on("mouseover", () => {
        focus.style("display", null);
      })
      .on("mouseout", () => {
        tooltip.transition().duration(300).style("opacity", 0);
      })
 

  }

  return <div className="area__container" />;
}

export default AreaChart;
