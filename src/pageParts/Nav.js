import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <>
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
    </>
  );
};

export default Nav;
