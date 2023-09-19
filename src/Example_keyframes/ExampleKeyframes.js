import { useEffect, useState, useRef } from "react";
import "./ExampleKeyframes.css";

function ExampleKeyframes() {
  const transofrmAreaRef = useRef(null);
  const transofrmAreaNestedRef = useRef(null);
  const menuRef = useRef(null);
  const nestedMenuRef = useRef(null);
  const dimensionsRef = useRef({ firstLevel: null, secondLevel: null });
  const [hideAnimation, setHideAnimation] = useState(true);

  const handleMouseEnter = (e) => {
    if (!e.target.children[1]) return;

    if (dimensionsRef.current?.firstLevel.right > window.innerWidth) {
      e.target.children[1].style.left = `${-dimensionsRef.current.firstLevel
        .width}px`;
      menuRef.current.classList.add("oppositeDirection");
    }
  };

  const handleMouseEnter1 = (e) => {
    if (!e.target.children[1]) return;

    if (
      transofrmAreaRef.current.getBoundingClientRect().left -
        dimensionsRef.current.secondLevel.width >
        0 &&
      transofrmAreaRef.current.getBoundingClientRect().right +
        dimensionsRef.current.secondLevel.width >
        window.innerWidth
    ) {
      e.target.children[1].style.left = `${-dimensionsRef.current.secondLevel
        .width}px`;
      nestedMenuRef.current.classList.add("oppositeDirection");
      return;
    }

    if (
      transofrmAreaRef.current.getBoundingClientRect().right +
        dimensionsRef.current.secondLevel.width <
      window.innerWidth
    ) {
      e.target.children[1].style.right = `${-dimensionsRef.current.secondLevel
        .width}px`;
      e.target.children[1].style.left = "initial";
    }
  };

  useEffect(() => {
    dimensionsRef.current.firstLevel =
      transofrmAreaRef.current?.getBoundingClientRect();
    dimensionsRef.current.secondLevel =
      transofrmAreaNestedRef.current.getBoundingClientRect();
    const timeoutId = setTimeout(() => setHideAnimation(false), 600);

    return () => clearTimeout(timeoutId);
    // possibly need to recalculate this useEffect more times to have actual value of nested menu
  }, []);

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
        <li className="menu-li">
          <a className="menu-link" href="/">
            item 5
          </a>
          <div className={`transform-area`}>
            <ul className={`menu ${hideAnimation ? "" : "visible"}`}>
              <li className="menu-li">
                <a className="menu-link" href="/">
                  sub item 1
                </a>
              </li>
              <li>sub item 3</li>
              <li className="menu-li-1" onMouseEnter={handleMouseEnter}>
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
                        <ul className="menu-2" ref={nestedMenuRef}>
                          <li>sub-sub</li>
                          <li>sub-sub</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ExampleKeyframes;
