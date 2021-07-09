import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
// import Button from './Button'
import styled from 'styled-components'
import {Button} from './Button'



function App() {
  const state = useSelector((state) => state);

  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  function checkAnswer() {
    let correctValue = state.questions[ind].correctAns;
    if (selectedValue === correctValue) {
      setScore(score + 1);
    }
    if (state.questions.length === ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }
  console.log(score);
  return (
    <div className="App text-center" >
      <h1 className=" text-white p-3 header"></h1>
      <div className="p-2">
        <div className="container">
          {showResult ? (
            <div
              className="p-3 rounded shadow text-white"
              style={{ backgroundColor: "#192a56" }}
            >
              <p
                className="fs-2 fw-bold text-light"
                style={{ letterSpacing: "1px" }}
              >
                Result
              </p>
              <progress
                className="p-3"
                style={{ width: "300px" }}
                id="file"
                value={score}
                max={state.questions.length}
              ></progress>
              <h3>{((score / state.questions.length) * 100).toFixed(2)} %</h3>
              <h3>
                {(score / state.questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!showResult ? (
          <div
            className="container p-5 my-2 rounded shadow text-white"
            style={{ backgroundColor: "#192a56" }}
          >
            <p className="fs-4">
              Question Number{" "}
              <span className="fs-1 fw-bold text-white">{ind + 1}</span> of{" "}
              {state.questions.length}
            </p>
            <h3>{state.questions[ind].question}</h3>
          </div>
        ) : null}
        {!showResult ? (
          <div
            className="container p-5 my-2 rounded shadow"
            style={{ backgroundColor: "#192a56" }}
          >
            <div className="row">
              {state.questions[ind].options.map((e, i) => {
                return (
                  <div key={i} >
                    <Button
                      onClick={() => setSelectedValue(e)}
                      // className="btn btn-light rounded px-5"
                    >
                      {e}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container">
            <Button
              onClick={() => checkAnswer()}
              // className="btn mt-3 text-white px-5 rounded-pill fs-5 bg-dark"
            >
              Next <i className="bi bi-arrow-right-circle-fill fw-bold"></i>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
