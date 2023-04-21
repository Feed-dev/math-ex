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
    <div class="max-w-md mx-auto">
      <h1 class="text-3xl font-bold mb-4">Random Exercise</h1>
      <p class="flex items-center">
        <span class="mr-2">{state.first}</span>
        <span class="mr-2">{state.operator}</span>
        <span class="mr-2">{state.second}</span>
        <input
          class="border border-gray-400 px-2 py-1 rounded mr-2"
          type="text"
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => checkAnswer(state)}
        >
          Check Answer
        </button>
        <span
          class="text-green-500 font-bold mr-2"
          style={{ visibility: "hidden" }}
        >
          Correct
        </span>
        <span
          class="text-red-500 font-bold mr-2"
          style={{ visibility: "hidden" }}
        >
          Incorrect
        </span>
        <span class="mr-2" style={{ visibility: "hidden" }}>
          {state.result}
        </span>
      </p>
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={generateExercise}
      >
        Generate Exercise
      </button>
    </div>
  );
};

// export the component
export default RandomEx;
