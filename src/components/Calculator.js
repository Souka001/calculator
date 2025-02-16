import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles.scss";

const buttonIds = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
  "=": "equals",
  ".": "decimal",
  C: "clear",
};

const Calculator = () => {
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch();

  const handleClick = (btn) => {
    if (btn === "C") dispatch({ type: "CLEAR" });
    else if (btn === "=") dispatch({ type: "EVALUATE" });
    else dispatch({ type: "APPEND", payload: btn });
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
       
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((btn) => (
          <button
            key={btn}
            id={buttonIds[btn]}
            className={
              ["+", "-", "*", "/"].includes(btn)
                ? "operator"
                : btn === "="
                ? "equals"
                : ""
            }
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
          
        ))}
         <button
          key="C"
          id="clear"
          className="clear"
          onClick={() => handleClick("C")}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
