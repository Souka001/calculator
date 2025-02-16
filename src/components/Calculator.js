import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { append, clear, evaluate } from "../store";
import "../styles.scss";

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);

  const handleClick = (value) => {
    if (value === "=") dispatch(evaluate());
    else if (value === "C") dispatch(clear());
    else dispatch(append(value));
  };

  return (
    <div className="calculator">
      <div className="display" id="display">{display}</div>
      <div className="buttons">
        {[
          "7", "8", "9", "/", 
          "4", "5", "6", "*", 
          "1", "2", "3", "-", 
          "0", ".", "+", 
          "=",
          "C"
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={
              btn === "=" ? "equals" :
              btn === "C" ? "clear" :
              ["+", "-", "*", "/"].includes(btn) ? "operator" :
              btn === "." ? "decimal" :
              "number"
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
