import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(evaluate(input)); 
    } catch {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
          <button key={btn} className="button" onClick={() => (btn === "=" ? calculate() : btn === "C" ? clearInput() : handleClick(btn))}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
