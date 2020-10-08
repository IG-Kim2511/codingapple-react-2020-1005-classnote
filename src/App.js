import React, { useState } from "react";
// 03-(3) 이미지 넣기 : 다른폴더에서 import해온 후, 이름지어주고, 그이름을 { }에 넣어서 사용
import logo from "./logo.svg";

import "./App.css";

// 02 2 리액트 React 설치
// 설치: npx create-react-app 폴더이름
// 미리보기:  npm start

// 03 JSX를 이용해 HTML 페이지 제작
// 여기 쓰는 것은 html이 아닌 JSX. html과 거의 똑같음. 다만 react.jsx도 js이므로, js와 겹치는 문법은 쓸 수 없음. 보통 { }로 대체해서 씀
// class -> className  (js문법 class와 겹침)
// App.css에서 css코딩
// (1)데이터 바인딩 { }
// (2) 함수이름으로 사용가능
// (3) 이미지 넣기
// (4) 클래스 이름으로도 사용가능

// (5) style 넣기 : 오브젝트 형식 { ' ' },과 데이터바인딩 { } 사용. style={{color:'blue'}}
// , '' 넣는것 조심
// font-size --> fontSize (js문법과 겹침)

// (6)style을 따로 변수에 넣고 데이터바인딩{ }사용..가능함

// (7) 그냥 css에 따로 코딩하는게 간편함

// function App() {
// // (1)
//   var posts = "강남 고기 맛집";

// // (2)
// function 함수(){
//   return 100
// }

//  // (6)
// var posts2 = { color: "blue", fontSize: "30px" };

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>개발 blog</div>
// // (1)
//            <h4>{posts} </h4>;
// // (2)
// <h4>{ 함수() }</h4>
// // (3)
// <img src={logo}>
//       </div>

//       <div className="black-nav">
//         <div>개발 blog</div>
// //(4)
//         <div className={data}>개발 blog</div>
//       </div>

// // (5)
// <div style={{ color: "blue", fontSize: "30px" }}>개발 blog </div>

// // (6)
// <div style={ post2}>개발 blog </div>

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
