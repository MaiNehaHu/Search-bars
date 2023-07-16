import React from "react";
import "./style.css";

const OneUser = ({ name, email }) => {
  return (
    <div>
      <li className="card">
        <p className="header" data-header>
          {" "}
          {name}{" "}
        </p>
        <p className="body" data-body>
          {" "}
          {email}{" "}
        </p>
      </li>
    </div>
  );
};

export default OneUser;
