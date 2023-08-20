import React, { useState, useRef } from "react";
import Buttons from "./Buttons";
import OneUser from "./OneUser";

import { motion, AnimatePresence } from "framer-motion";

const Debounce = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "cornflowerblue";

  const inputRef = useRef();

  const [list, setList] = useState([
    { id: 0, name: "Hi...🙌", email: "I'll do debouncing search" },
  ]);
  const [textInput, setTextInput] = useState("");

  function SearchDebounceData(dataFromAPI) {
    const Data = dataFromAPI;
    const input = inputRef.current.value.toLowerCase();

    if (input === "") {
      setList([{ id: 0, name: "You got debouncing🤩", email: "Type again" }]);
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
        SearchDebounceData(res);
        setTextInput(inputRef.current.value);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function debouncing(callFunc, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);

      timer = setTimeout(() => {
        callFunc.apply(context, args);
      }, delay);
    };
  }

  const debounceFunc = debouncing(getData, 5000);

  return (
    <React.Fragment>
      <Buttons />
      <div id="search-wrapper">
        <h1>Debounce Search Bar</h1>
        <input
          type="search"
          id="search-bar"
          onKeyUp={debounceFunc}
          ref={inputRef}
        />
        <h2>API is called after 5 seconds of "onKey🆙" event</h2>
        <h2>{textInput}</h2>
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

export default Debounce;
