import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var data = "안녕하세요";

  return (
    <div className="App">
      <div className="black-nav">
        <div>03 JSX를 이용해 HTML 페이지 제작</div>
        <div>{data}</div>
      </div>

      <div className="black-nav">
        <div>03 JSX를 이용해 HTML 페이지 제작</div>
        <div className={data}>{data}</div>
      </div>

      <div style={{ color: "blue", fontSize: "30px" }}>
        {" "}
        03 JSX를 이용해 HTML 페이지 제작{" "}
      </div>
    </div>
  );
}

export default App;
