import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbtack,
  faGlobe,
  faSquare,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
const Main = ({title}) => {
  return (
    <main className="main">
      <h2 className="main__header">Performance Management</h2>
      <div className="main__banner">
        <div className="main__subheaderContainer">
          <h1 className="main__subheader">
            <FontAwesomeIcon icon={faGlobe} /> Diagnostic Tool
          </h1>
          <div className="main__save">
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </div>
        </div>
      </div>
      <div className="main__filters">
        <div className="filters__left">
          <h3 className="filters__header">Filters</h3>
          <div className="filters">
            <ul className="filters__open">
              <li className="open__item blue">
                <FontAwesomeIcon icon={faSquare} />
              </li>
              <li className="open__item">All CQA Results</li>
              <li className="open__item grey">
                <FontAwesomeIcon icon={faInfoCircle} />
              </li>
            </ul>
            <ul className="filters__closed">
              <li className="closed__item grey2">
                <FontAwesomeIcon icon={faSquare} />
              </li>
              <li className="closed__item">CQAs with Closed Loop</li>
              <li className="closed__item grey">
                <FontAwesomeIcon icon={faInfoCircle} />
              </li>
            </ul>
          </div>
        </div>
        <div className="filters__right">
          <div className="trend">
            <h3 className="trend__header">{title} Trend</h3>
            <div className="trend__date">
              <button className="btn trend__btn btn--disabled">Day</button>
              <button className="btn trend__btn">Week</button>
              <button className="btn btn--current trend__btn">Month</button>
              <button className="btn trend__btn">Quarter</button>
              <button className="btn trend__btn">Half</button>
              <button className="btn trend__btn">Year</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
