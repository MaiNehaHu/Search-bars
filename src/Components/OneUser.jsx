import React from "react";
import "./style.css";

import { motion } from "framer-motion";

const OneUser = ({ name, email }) => {
  return (
    <div>
      <motion.li
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <p className="header" data-header>
          {" "}
          {name}{" "}
        </p>
        <p className="body" data-body>
          {" "}
          {email}{" "}
        </p>
      </motion.li>
    </div>
  );
};

export default OneUser;
