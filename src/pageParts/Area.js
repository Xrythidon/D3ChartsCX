import React from "react";
import { useMediaQuery } from "react-responsive";

const Area = ({dataDefault, AreaChart, areaData}) => {
    const isTablet = useMediaQuery({
        query: "(min-width: 900px)",
      });
    
  return (
    <>
      {dataDefault &&
        (isTablet ? (
          <AreaChart data={areaData[dataDefault]} width={500} height={150} />
        ) : (
          <AreaChart data={areaData[dataDefault]} width={300} height={100} />
        ))}
    </>
  );
};

export default Area;
