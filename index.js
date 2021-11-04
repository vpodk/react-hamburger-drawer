import React, { useEffect, useRef } from "react";
import FocusBounder from "react-focus-bounder";
import "./index.css";

export const HamburgerDrawer = ({ children, useFocusBounder = false }) => {
  const checkbox = useRef(null);
  const Wrapper = useFocusBounder ? FocusBounder : React.Fragment;

  const handleEscKey = (event) => {
    // Closes the navigation drawer by pressing Esc key.
    if ("Escape" === event.key) {
      checkbox.current.checked = false;
    }
  };

  const handleKeyup = (event) => {
    if ("Enter" === event.key) {
      checkbox.current.checked = !checkbox.current.checked;
    }
  };

  const handleClick = () => {
    document.documentElement.classList.toggle("HamburgerDrawer-open");
  };

  useEffect(() => {
    document.addEventListener("keyup", handleEscKey);
    return () => document.removeEventListener("keyup", handleEscKey);
  }, []);

  return (
    <Wrapper>
      <nav className="HamburgerDrawer" aria-label="Main menu">
        <input
          ref={checkbox}
          type="checkbox"
          id="HamburgerDrawer-toggle"
          aria-label="Toggle menu"
          onKeyUp={handleKeyup}
          onClick={handleClick}
        />
        <label
          htmlFor="HamburgerDrawer-toggle"
          tabIndex="-1"
          aria-hidden="true"
          hidden
        >
          Close menu
        </label>
        <div
          className="HamburgerDrawer-icon"
          role="button"
          aria-label="Toggle menu"
        >
          <span></span>
        </div>
        <div className="HamburgerDrawer-panel">{children}</div>
      </nav>
    </Wrapper>
  );
};

export default HamburgerDrawer;
