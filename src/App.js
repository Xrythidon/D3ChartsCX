import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./styles/styles.scss";
import "./styles/burgermenu.scss";

import data from "./data";

import GaugeChart from "./components/charts/GaugeChart";
import AreaChart from "./components/charts/AreaChart";

import Template from "./template/index";

function App() {
  const isTablet = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const gaugeData = data["gaugeData"];
  const areaData = data["areaData"];

  const [dataDefault, setDataDefault] = useState(gaugeData[0].name);


  useEffect(() => {
    console.log(gaugeData);
  }, []);

  return (
    <Template/>
  );
}

export default App;


/* 

    <div className="App">
      <Template/>
      <h1>{dataDefault}</h1>
      {gaugeData.map((data, index) => (
        <GaugeChart
          key={index}
          index={index}
          setDataDefault={setDataDefault}
          gaugeData={data}
          innerRadius={46}
          outerRadius={50}
        />
      ))}
      {dataDefault && (isTablet ? (
        <AreaChart data={areaData[dataDefault]} width={500} height={150} />
      ) : (
        <AreaChart data={areaData[dataDefault]} width={300} height={100} />
      ))}
    </div>
    */