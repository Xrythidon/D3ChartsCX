import React, { useState } from "react";

import "./styles/styles.scss";
import data from "./data";

//PageParts
import Nav from "./pageParts/Nav";
import Main from "./pageParts/Main";
import Gauge from "./pageParts/Gauge";
import Area from "./pageParts/Area";

// Components
import GaugeChart from "./components/charts/GaugeChart";
import AreaChart from "./components/charts/AreaChart";

function App() {
  const gaugeData = data["gaugeData"];
  const areaData = data["areaData"];

  const [dataDefault, setDataDefault] = useState(gaugeData[0].name);

  return (
    <div className="app">
      <Nav />
      <Main title={dataDefault} />
      <div className="chart__container">
        <Gauge
          gaugeData={gaugeData}
          GaugeChart={GaugeChart}
          setDataDefault={setDataDefault}
        />
        <Area
          dataDefault={dataDefault}
          AreaChart={AreaChart}
          areaData={areaData}
        />
      </div>
    </div>
  );
}

export default App;

/* 


    */
