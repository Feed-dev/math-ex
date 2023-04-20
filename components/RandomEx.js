// a component to integrate into the main app
// this component will be used to display a random basic math exercise for 7 year olds.

// import the React library
import React, { useState } from "react";

// define the component
const RandomEx = () => {
  // define the state variable
  const [state, setState] = useState({
    first: 0,
    second: 0,
    operator: "+",
    result: 0,
  });

  // define the function to generate a random number
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  //define fuction to check if the answer is correct
  const checkAnswer = (state) => {
    //get the answer from the input
    let answer = parseInt(document.querySelector("input").value);
    //check if the answer is correct
    if (answer === state.result) {
      //if correct, display "Correct" in green
      document.querySelector("span").style.visibility = "visible";
      document.querySelector("span").style.color = "green";
      document.querySelector("span").innerHTML = "Correct";
    } else {
      //if incorrect, display "Incorrect" in red
      document.querySelector("span").style.visibility = "visible";
      document.querySelector("span").style.color = "red";
      document.querySelector("span").innerHTML = "Incorrect";
    }
  };

  // define the function to generate a random exercise
  const generateExercise = () => {
    // generate the first number
    let first = getRandomInt(10);
    // generate the second number
    let second = getRandomInt(10);
    // generate the operator
    let operator = getRandomInt(4);
    // generate the result
    let result = 0;
    if (operator === 0) {
      result = first + second;
      operator = "+";
    } else if (operator === 1) {
      result = first - second;
      operator = "-";
    } else if (operator === 2) {
      result = first * second;
      operator = "*";
    } else {
      // ensure that the second number is not zero
      while (second === 0) {
        second = getRandomInt(10);
      }
      // check if the first number is divisible by the second number
      while (first % second !== 0) {
        // if not, regenerate the first number
        first = getRandomInt(10);
      }
      // calculate the quotient
      result = first / second;
      operator = "/";
    }

    // if the result is outside the range of 0 and 100, or not a whole number, regenerate the exercise
    if (result < 0 || result > 100 || !Number.isInteger(result)) {
      generateExercise();
    } else {
      // update the state
      setState({
        first: first,
        second: second,
        operator: operator,
        result: result,
      });
    }
  };

  // return the JSX
  return (
    <div>
      <h1>Random Exercise</h1>
      <p>
        {state.first} {state.operator} {state.second} = <input type="text" />
        <button onClick={() => checkAnswer(state)}>Check Answer</button>
        <span style={{ visibility: "hidden" }}>Correct</span>
        <span style={{ visibility: "hidden" }}>Incorrect</span>
        <span style={{ visibility: "hidden" }}> {state.result}</span>
      </p>
      <button onClick={generateExercise}>Generate Exercise</button>
    </div>
  );
};

// export the component
export default RandomEx;
