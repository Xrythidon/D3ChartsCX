import React, { useEffect, useState } from "react";
import "./styles/styles.scss";

import data from "./data";

import GaugeChart from "./components/charts/GaugeChart";
import AreaChart from "./components/charts/AreaChart";

function App() {

  const gaugeData = data["gaugeData"];
  const areaData = data["areaData"];

  useEffect(() => {

    console.log(gaugeData)
  }, []);

  return <div className="App">
  Hello

      {gaugeData.map((data, index) => (
        <GaugeChart key={index} gaugeData={data} innerRadius={46} outerRadius={50}/>
      ))}


      <AreaChart data={areaData["Quality Score"]} width={600} height={200}/>





  </div>;
}

export default App;
