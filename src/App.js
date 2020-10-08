// 04 useState : 리액트 내장함수 state 쓰겠다는 뜻
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

// (5-1) style 넣기 :  그냥 css에 따로 코딩하는게 간편함

// (5-2) 오브젝트 형식 { ' ' },과 데이터바인딩 { } 사용. style={{color:'blue'}}
// , '' 넣는것 조심
// font-size --> fontSize (js문법과 겹침)

// (5-3)style을 따로 변수에 넣고 데이터바인딩{ }사용..가능함

// function App() {
// // (1)
//   var posts = "강남 고기 맛집";

// // (2)
// function 함수(){
//   return 100
// }

//  // (5-3)
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

// // (5-2)
// <div style={{ color: "blue", fontSize: "30px" }}>개발 blog </div>

// // (5-3)
// <div style={ post2 }>개발 blog </div>

//     </div>
//   );
// }

// 04 state: 중요한 데이터는 변수말고 state로 만들랬죠
// 데이터는 variable(변수) or state에 넣을수있음

// (1)ES6 destructuring 문법 : array,object 를 variable함
// a=10, b=100

//(2) useState('남자코트');
// useState 를 es6 destructuring문법으로 바꿈
// state데이터변경함수는 나중에 

// (3) array 사용가능( "문자,숫자,array,object 사용가능")
// 1번째 데이터

function App() {
  // (1)
  var [a, b] = [10, 100];

  // (2)
  let [문자, 데이터변경함수] = useState("남자코트");

  //(3)
  let [문자2, 데이터변경함수2] = useState(["맛집1", "맛집2"]);

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
        <h3>{문자}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
      // (3)
        <h3>{문자2[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
