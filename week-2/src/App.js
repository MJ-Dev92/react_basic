// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  console.log(number);
  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        +1
      </button>
    </div>
  );
};

export default App;
