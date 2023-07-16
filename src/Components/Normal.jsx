import React, { useRef, useState } from "react";
import OneUser from "./OneUser";
import "./style.css";
import Buttons from "./Buttons";

import { motion, AnimatePresence } from "framer-motion";

const Normal = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#ff4d7c";

  const inputRef = useRef();

  const [list, setList] = useState([
    { id: 0, name: "Hi 🙌", email: "Start Typing📝" },
  ]);

  function SearchData(dataFromAPI) {
    let input = inputRef.current.value.toLowerCase();

    const Data = dataFromAPI;
    if (input === "") {
      setList([{ id: 0, name: "You got it🤩", email: "Type again" }]);
    } else {
      const SearchResult = Data.filter((user) => {
        let name = user.name.toLocaleLowerCase();
        let email = user.email.toLocaleLowerCase();

        return name.includes(input) || email.includes(input);
      });

      if (SearchResult.length == 0) {
        setList([
          { id: 99, name: "Sorry🥲 broo!!!", email: "Not found result" },
        ]);
      } else {
        setList(SearchResult);
      }
    }
  }

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        SearchData(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <React.Fragment>
      <Buttons />
      <div id="search-wrapper">
        <h1>Normal Search Bar</h1>
        <input type="search" id="search-bar" onKeyUp={getData} ref={inputRef} />
        <h2>API is called for every "onKey🆙" event.</h2>
        <motion.ul className="user-cards">
          <AnimatePresence>
            {list.map((user) => {
              return (
                <OneUser key={user.id} email={user.email} name={user.name} />
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </React.Fragment>
  );
};

export default Normal;
