import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faSave } from "@fortawesome/free-regular-svg-icons";
import {
  faThumbtack,
  faChartBar,
  faEnvelopeOpenText,
  faShapes,
  faFileSignature,
  faToggleOff,
  faDownload,
  faPrint,
  faSignOutAlt,
  faGlobe,
  faSquare,
  faInfoCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <div className="app">
      {isTablet && (
        <nav className="nav">
          <ul className="nav__links">
            <li className="nav__link">
              <FontAwesomeIcon icon={faThumbtack} size="1x" />
            </li>
            <li className="nav__link">
              <FontAwesomeIcon icon={faChartBar} />
            </li>
            <li className="nav__link">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </li>
            <li className="nav__link">
              <FontAwesomeIcon icon={faShapes} />
            </li>
            <li className="nav__link">
              <FontAwesomeIcon icon={faFileSignature} />
            </li>
          </ul>
        </nav>
      )}

      <div className="status">
        <div className="status__bar">
          <div className="status__left">
            {!isTablet ? (
              <nav className="nav--burger">
                {" "}
                <FontAwesomeIcon icon={faBars} size="1x" />
              </nav>
            ) : (
              <h1 className="status__title">Diagnostic Tool</h1>
            )}
          </div>
          <div className="status__right">
            <ul className="status__links">
              <li className="status__loggedIn">Logged in as General User</li>
              <li className="status__link">
                <FontAwesomeIcon icon={faToggleOff} />
              </li>
              <li className="status__link">
                <FontAwesomeIcon icon={faDownload} />
              </li>
              <li className="status__link">
                <FontAwesomeIcon icon={faPrint} />
              </li>
              <li className="status__link">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </li>
              <li className="status__link">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
              <h3 className="trend__header">Quality Score Trend</h3>
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
    </div>
  );
};

export default Index;
