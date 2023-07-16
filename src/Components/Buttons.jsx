import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div>
      <div className="Switch-buttons">
        <Link to="/Debounce">Debounce</Link>

        <Link to="/">Normal</Link>

        <Link to="/Throttle">Throttle</Link>
      </div>
    </div>
  );
};

export default Buttons;
