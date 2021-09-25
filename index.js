import React, { useEffect, useRef } from "react";
import "./index.css";

export const HamburgerDrawer = ({ children }) => {
  const checkbox = useRef(null);

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
  );
};

export default HamburgerDrawer;
