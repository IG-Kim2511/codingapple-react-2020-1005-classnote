import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// 03 JSX를 이용해 HTML 페이지 제작
// function App() {
//   var data = "안녕하세요";

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>03 JSX를 이용해 HTML 페이지 제작</div>
//         <div>{data}</div>
//       </div>

//       <div className="black-nav">
//         <div>03 JSX를 이용해 HTML 페이지 제작</div>
//         <div className={data}>{data}</div>
//       </div>

//       <div style={{ color: "blue", fontSize: "30px" }}>
//         {" "}
//         03 JSX를 이용해 HTML 페이지 제작{" "}
//       </div>

//     </div>
//   );
// }

// 04 중요한 데이터는 변수말고 state로 만들랬죠

function App() {
  // ES6 destructuring 문법
  var [a, b] = [10, 100];

  // useState
  let [데이터, 데이터변경함수] = useState("문자 데이터");

  // [array]
  let [데이터2, 데이터변경함수2] = useState([
    "문자,숫자,array,object 사용가능",
    "array 사용 가능2",
  ]);

  let posts = "변수";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className="list">
        <h3>{posts}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{데이터}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{데이터2[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
