import { useEffect, useState, useRef } from "react";
import "./ExampleKeyframes.css";

function ExampleKeyframesJSTransition() {
  const [transofrmAreaStylesRef, setTransofrmAreaStylesRef] = useState({
    display: "none",
    overflow: "hidden",
  });
  const transofrmAreaNestedRef = useRef(null);

  const handleTransformAreaEnter = (e) => {
    const menu = e.target.querySelector(".menu");
    const transformArea = e.target.querySelector(".transform-area");
    setTimeout(() => {
      transformArea.style.display = "block";
      transformArea.style.overflow = "visible";
      requestAnimationFrame(() => {
        menu.style.transform = "translateY(0%)";
      });
    }, 886);
  };

  const handleTranformAreaLeave = (e) => {
    setTimeout(() => {
      setTransofrmAreaStylesRef({
        display: "none",
        overflow: "hidden",
      });
    }, 900);
  };

  return (
    <div className="main">
      <ul>
        <li>
          <a className="menu-link" href="/">
            item 1
          </a>
        </li>
        <li>
          <a className="menu-link" href="/">
            item 2
          </a>
        </li>
        <li>
          <a className="menu-link" href="/">
            item 3
          </a>
        </li>
        <li>
          <a className="menu-link" href="/">
            item 4
          </a>
        </li>
        <li
          className="menu-li"
          onMouseEnter={handleTransformAreaEnter}
          onMouseLeave={handleTranformAreaLeave}
        >
          <a className="menu-link" href="/">
            item 5
          </a>
          <div
            className={`transform-area`}
            style={{ display: "none", overflow: "hidden" }}
          >
            <ul
              className={`menu`}
              style={{
                transitionProperty: "transform",
                transitionDuration: "0.5s",
                transitionDelay: "1s",
                transitionTimingFunction: "ease",
                backgroundColor: "lightblue",
                opacity: 0.8,
                transform: "translateY(-100%)",
              }}
            >
              <li className="menu-li">
                <a className="menu-link" href="/">
                  sub item 1
                </a>
              </li>
              <li>sub item 3</li>
              {/* <li className="menu-li-1" onMouseEnter={handleMouseEnter}>
                <a className="menu-link-1" href="/">
                  sub item 2
                </a>
                <div className="transform-area-1" ref={transofrmAreaRef}>
                  <ul className={`menu-1`} ref={menuRef}>
                    <li>sub-sub item 1</li>
                    <li className="menu-li-2" onMouseEnter={handleMouseEnter1}>
                      <a className="manu-link-2" href="/">
                        sub-sub item 2
                      </a>
                      <div
                        className="transform-area-2"
                        ref={transofrmAreaNestedRef}
                      >
                        <ul className="menu-2">
                          <li>sub-sub-sub item 1</li>
                          <li>sub-sub-sub item 2</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ExampleKeyframesJSTransition;
