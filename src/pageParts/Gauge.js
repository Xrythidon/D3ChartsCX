import React from "react";

const Gauge = ({gaugeData, GaugeChart, setDataDefault}) => {
  return (
    <>
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
      <div className="gauge__container"></div>
    </>
  );
};

export default Gauge;
