// 05 eslint 문법체크 안보이게 하려면... 추가
/*eslint-disable */

// 04 useState : 리액트 내장함수 state 쓰겠다는 뜻
import React, { useState } from "react";

// 03-(3) 이미지 넣기 : 다른폴더에서 import해온 후, 이름지어주고, 그이름을 { }에 넣어서 사용
import logo from "./logo.svg";

import "./App.css";

// 01 ( 코딩애플강사가 말하는 UI는 html을 의미함. 알고있을 것) 

// 02 리액트 React 설치
// 설치: npx create-react-app 폴더이름
// 미리보기:  npm start

function App2(){
  return(
      <div>      
          설치: npx create-react-app 폴더이름 <br/>
          미리보기:  npm start
      </div>
  )
}

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

function App3(){

  // (1)
  var posts = "강남 고기 맛집";

  // (2)
  function 함수(){
      return 100
  }

  // (5-3)
  var posts2 = { color: "blue", fontSize: "30px" };

  return(
  <div className="App">
      <div className="black-nav"> 03 JSX </div>  

      // (1)
      <h4>{posts} </h4>;
      // (2)
      <h4>(함수())</h4>
      // (3)
      <img src={ logo } alt="" className='img1'/>

      // (4)
      <h4 className="{posts}">개발 blog</h4>
      // (5-2)
<div style={{ color: "blue", fontSize: "30px" }}>개발 blog </div>
  </div>
  )
}


// 04 state: 중요한 데이터는 변수말고 state로 만들랬죠
// 데이터는 variable(변수) or state에 넣을수있음

// (1)ES6 destructuring 문법 : array,object 를 variable함
// a=10, b=100

//(2) useState('남자코트');
// useState 를 es6 destructuring문법으로 바꿈
// let [state, state함수] = useState(0);
// state데이터변경함수는 나중에

// (3) array 사용가능( "문자,숫자,array,object 사용가능")
// 1번째 데이터

function App4() {
  // (1)
  var [a, b] = [10, 100];

  // (2)
  let [문자, 문자변경함수] = useState("남자코트");

  //(3)
  let [문자2, 문자변경함수2] = useState(["맛집1", "맛집2"]);

  let posts = "변수";

  return (
    <div className="App">
    <div className="black-nav">04 state: 중요한 데이터는 변수말고 state로 만들랬죠</div>
 
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





// 05(좋아요버튼 만들기) 버튼에 기능개발을 해보자 & state변경하는 법

// (1) span 클릭할때마다 숫자 오르기
// ( JS문법  onclick = "1+1" )
// react문법  onClick = { ()=>{1+1} }
//  { } , 함수를 사용해야함.

// (2) (3) state : 문자. state function : 문자 변경하는 함수

// state함수(); 함수를 가져다 쓸수있음
// state함수(1);      ---> count(0)이 1로 바뀜
// state함수(가나다);---> count(0)이 '가나다'로 바뀜

// 그냥쓰면 재랜더링이 무한반복됨

function App5() {
  let [문자, 문자변경함수] = useState(["남자", "강남", "파이썬"]);

  // (2)
  let [state, state함수] = useState(0);

  // (3)
  let [count, setCount] = useState(0);

  let posts = "강남 고기 맛집";

  return (
    <div className="App">
    <div className="black-nav">05(좋아요버튼 만들기) 버튼에 기능개발을 해보자 & state변경하는 법</div>
      <div className="list">
        // (1)
        <h3>
          {문자[0]}{" "}
          <button
            onClick={() => {
              console.log(1);
            }}
          >
            👍
          </button>
          0{" "}
        </h3>
        // (2)
        <h3>
          {" "}
          {문자[0]}{" "}
          <button
            onClick={() => {
              state함수(state + 1);
            }}
          >
            👍
          </button>{" "}
          {state}
        </h3>

<h3> <button onClick={ ()=>{ state함수 (  state  + 1) }}> 👍</button> {state} </h3>
        // (3)
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>{문자[1]}</h3>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h3>{문자[2]}</h3>
        <p>2월 19일 발행</p>
      </div>
    </div>
  );
}



// 06 숙제 해설 : 블로그 글 수정버튼 만들기
// (1)onClick에 함수넣기
// 함수에 ()붙이면, 클릭이전에 바로 함수실행됨. 그래서 뺌

// (2)알고리즘
// 0. 글제목이라는 state는 직접 수정할 수 없습니다. 그래서.. 복사본을 만들기로 합니다.
// 1. 글제목이라는 state의 복사본을 만들어 newArray라는 변수에 저장합니다.
// 2. newArray의 0번째 데이터를 ‘여자코트 추천’으로 변경합니다.
// 3. 그리고 그걸 글제목변경() 함수 안에 넣어서 글제목 state를 변경합니다.

// 이런 식으로 사용하면 data1에 있던 자료를 data2에 복사한다는 뜻이죠?
// 근데 data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라
// data1과 data2는 똑같은 값을 공유합니다.
// data1을 변경하면 data2도 자동으로 변경되고 그렇습니다. (충격)
// (자세한건 javascript reference data type이라고 검색해봅시다)

// 그래서 결론은 state도 등호 = 를 이용해서 복사하면 문제가 일어나기 때문에
// 완전히 개별 복사본을 만들어주는 deep copy 식으로 카피하셔야합니다.
// deep copy는 여러가지 방법이 있는데 가장 쉬운 방법은
// 그래서 결론은 state도 등호 = 를 이용해서 복사하면 문제가 일어나기 때문에
// 완전히 개별 복사본을 만들어주는 deep copy 식으로 카피하셔야합니다.
// 방법은 var newArray = [...글제목];

function App6() {
  let [글제목, 글제목변경] = useState(["남자", "강남", "파이썬"]);

  let [state, state함수] = useState(0);

  let [count, setCount] = useState(0);

  let posts = "강남 고기 맛집";

  // (1)
  // function 제목바꾸기() {
  //   글제목변경(["여자", "강남", "파이썬"]);
  // }

  // (2)
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
    <div className="black-nav"> 06 숙제 해설 : 블로그 글 수정버튼 만들기</div>
         // (1) (2)
       <div>
          <button onClick={제목바꾸기}>버튼</button>
       </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 19일 발행</p>      
      </div>
      
      <div className="list">
        <div>
        <h3> <button onClick={ ()=>{ state함수 (  state  + 1) }}> 👍</button> {state} </h3>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <p>2월 17일 발행</p>
      </div>
   
    </div>
  );
}

// 07 Component : 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때
// (1) function App() {},  function Modal(){} 각자 Component
// (2)function, return넣고, <이름/>으로 호출
// (3)소문자 이름, 한글이름 x
// (4)  <>: fragments문법 
// : div대신에  <> </>으로 감싸는 방법.. 
// : 왜인지 모르지만 이거쓰면 red color element 가 뜨면서 intellisense가 사용이 안됨. 그래서 나는 안쓰는 걸로...
// (5) 다른component의 변수를 가져와 쓸수없음. props라는 문법을 이용해 state를 <Modal>까지 전해줘야 비로소 사용가능합니다.

function App7() {
  return (
   <div className="App">
    <div className="black-nav">07 Component : </div>

    // (1) (2)
    <Modal></Modal>
    <Modal/>
   </div>
  );
}


// (1) (2)
function Modal(){
  return(
    //(4)
    <div>
     <div className='modal'>
      <h2>title</h2>
      <p>date</p>
      <p>date</p>
      
      </div>
      <div></div>
    </div>
  )
}

// 08 클릭하면 동작하는 UI (모달창) 만드는 법
// 바닐라js: sytle="displa:none"/"block".....

// (1)Component 선언 (<modal2></modal2>) 아무곳에 넣을수있음

// (2)Conditional Expressions (조건연산자,삼항연산자) : react에서 if문법
// { } 리액트 문법 + Conditional Expressions 사용.

//   if(1 < 3 ){
//     <Modal2></Modal2>
//   }else{
//     <div></div>
//   }

//(3) null : 텅빈 html이라는 뜻, 
// 스위치끌때는 텅빈 화면만 나오게 설정
// ( 리액트에서 텅빈 HTML을 의미하는 코드는 null이라는 자료형입니다.)

// (4) state로 html 보임.안보임 을 저장해둠
// if문에서 state가 true일때 html보여줌
// false : 사이트 첫 로딩때 modal2창 안보이게..

// (5) 열기닫기 버튼
// modal이 true라면 false가 되고, modal이 false면 true가 됩니다. 
// 열려있으면 닫히고 닫혀있으면 열리게 됩니다

function App8() {
  // (4)
let [modal,modal변경]=useState(false);

  return (
   <div className="App">
    <div className="black-nav">08 클릭하면 동작하는 UI (모달창) 만드는 법 </div>

  //  (1) (2) (3)
    { 
      modal === true
      ? <Modal2></Modal2>
      : null
   }

   <br/>
  //  (4)
 
  <button onClick={()=>{modal변경(true)}}>modal2열기 button</button>  <br/>
 
  // (5)

  <button onClick={()=>{modal변경(!modal)}}>modal2열기닫기 button</button><br/>
 

  
  
 
   </div>
  );
}

function Modal2(){
  return(
    <div>
     <div className='modal'>
        <h2>title</h2>
        <p>date</p>
        <p>date</p>
      
      </div>
      <div></div>
    </div>
  )
}



// App
function App(){
  return(
    <div>
      <App2/>
      <App3/>
      <App4/>
      <App5/>
      <App6/>
      <App7/>
      <App8/>
      
    </div>
  )
}

export default App;

