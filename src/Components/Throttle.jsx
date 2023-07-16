import React, { useState, useRef } from "react";
import OneUser from "./OneUser";
import Buttons from "./Buttons";

const Throttle = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#ffd54d";

  const inputRef = useRef();

  const [list, setList] = useState([
    { id: 0, name: "Hi...🙌", email: "I'll do throttling search" },
  ]);

  function SearchThrottleData(dataFromAPI) {
    const Data = dataFromAPI;
    const input = inputRef.current.value.toLowerCase();

    if (input === "") {
      setList([{ id: 0, name: "You got throttling🤩", email: "Type again" }]);
    } 
    else {
      const SearchResult = Data.filter((user) => {
        let name = user.name.toLocaleLowerCase();
        let email = user.email.toLocaleLowerCase();

        return name.includes(input) || email.includes(input);
      });

      if (SearchResult.length == 0) {
        setList([
          { id: 99, name: "Sorry🥲 broo!!!", email: "Not found result" },
        ]);
      } 
      else {
        setList(SearchResult);
      }
    }
  }

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        SearchThrottleData(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function throttle(callFunc, delay) {
    let flag;
    return function () {
      let context = this,
        args = arguments;
      flag = true;
      if (flag) {
        flag = false;

        setTimeout(() => {
          callFunc.apply(context, args);
        }, delay);
      }
    };
  }

  const ThrottleFunc = throttle(getData, 5000);

  return (
    <React.Fragment>
      <Buttons />
      <div id="search-wrapper">
        <h1>Throttle Search Bar</h1>
        <input
          type="search"
          id="search-bar"
          onKeyUp={ThrottleFunc}
          ref={inputRef}
        />
        <h2>API is called after every 5 seconds.</h2>
        <ul className="user-cards">
          {list.map((user) => {
            return (
              <OneUser key={user.id} email={user.email} name={user.name} />
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Throttle;
