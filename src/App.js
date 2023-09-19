import { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
// import "./App.css";
import ExampleKeyframes from "./Example_keyframes/ExampleKeyframes";

function App() {
  const [hideParentOverflow, setHideParentOverflow] = useState("");
  const [visibleSubList, setVisibleSubList] = useState(false);
  const [visible, setVisible] = useState(false);

  // for (let i = 0; i < 10e9; i++) {}

  return (
    <div className="main">
      {/* <ul className="menu">
        <li
        // onMouseOver={() => setTimeout(() => setVisibleSubList(true), 1200)}
        // onMouseLeave={() => setVisibleSubList(false)}
        >
          <a>item 1</a>
          <div className={`transform-area`}>
            <ul className={`submenu ${visible ? "visible" : ""}`}>
              <li>sub item 1</li>
              <li
                className="li-with-sub-items"
                onMouseOver={() => setHideParentOverflow("visible")}
                onMouseLeave={() => setHideParentOverflow("")}
              >
                sub item 2
                <div className="sub-transform-area">
                  <ul className={`sub-submenu`}>
                    <li>sub-sub item 1</li>
                    <li className="li-with-sub-items">
                      sub-sub item 2
                      <div className="sub-transform-area">
                        <ul className="sub-submenu">
                          <li>sub-sub-sub item 1</li>
                          <li>sub-sub-sub item 2</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>sub item 3</li>
            </ul>
          </div>
        </li>
      </ul> */}
      <ExampleKeyframes />
    </div>
  );
}

export default App;
