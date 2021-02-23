import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./styles/styles.scss";

import data from "./data";

import GaugeChart from "./components/charts/GaugeChart";
import AreaChart from "./components/charts/AreaChart";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const gaugeData = data["gaugeData"];
  const areaData = data["areaData"];

  const [dataDefault, setDataDefault] = useState(gaugeData[0].name);


  useEffect(() => {
    console.log(gaugeData);
  }, []);

  return (
    <div className="App">
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
      {dataDefault && (isDesktop ? (
        <AreaChart data={areaData[dataDefault]} width={500} height={150} />
      ) : (
        <AreaChart data={areaData[dataDefault]} width={300} height={100} />
      ))}
    </div>
  );
}

export default App;
