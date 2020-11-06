// 05 -(5)
/*eslint-disable */

import "./App.css";

// 03-(3)-1 
import logo from "./logo.svg";
// 04-(2)
import React, { Profiler, useState } from "react";


//🦄
//🦄 01 소개 ( 코딩애플강사가 말하는 UI는 html을 의미함. 알고있을 것) 

//🦄
//🦄 02 리액트 React 설치
//(1) →캡쳐확인
// node.js설치
// node_modules폴더 : 설치한 라이브러리 모은 폴더
// public : static파일 보관함. 나중에 build압축할때, public안의 폴더는 바뀌지않고 남음
// src: source code 보관함
// package.json : 설치한 라이브러리 목록

// (2)
// 설치: npx create-react-app 작명folder
// 미리보기:  npm start

// 첫 화면:
// function App(){
//   return(
//       <div> </div>
//   )
// }

function App2(){
  return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
      IG Kim
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  )
}

//🦄
//🦄 03 JSX를 이용해 HTML 페이지 제작
// 여기 쓰는 것은 html이 아닌 JSX. html과 거의 똑같음. 다만 react.jsx도 js이므로, js와 겹치는 문법은 쓸 수 없음. 보통 { }로 대체해서 씀
// class -> className  (js문법 class와 겹침)
// App.css에서 css코딩

// (1)데이터 바인딩 (Data binding) : { }

// (2) 함수이름으로 사용가능

// (3)-1 이미지 넣기↑
// 이미지 넣기 : 다른폴더에서 import해온 후, 이름지어주고 
// : import logo from "./logo.svg";

// (3)-2 그 이름을 { }에 넣어서 사용

// (4) 클래스 이름으로도 사용가능

// (5-1) style 넣기 :  그냥 css에 따로 코딩하는게 간편함

// (5-2) 오브젝트 형식 { ' ' },과 데이터바인딩 { } 사용. style={{color:'blue'}}
// , '' 빠뜨리지않게 주의
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
      <p className="black-nav"> 03 JSX </p>  

      // (1)
      <h4>{posts} </h4>;
      // (2)
      <h4>(함수())</h4>
      // (3)-2
      <img src={ logo } alt="" className='img1'/>

      // (4)
      <h4 className="{posts}">개발 blog</h4>
      // (5-2)
<div style={{ color: "blue", fontSize: "30px" }}>개발 blog </div>
  </div>
  )
}

//🦄
//🦄 04 state.중요한 데이터는 변수말고 state로 
// 데이터는 variable(변수) or state에 넣을수있음

// (1)ES6 destructuring 문법 : array,object 를 variable함
// 왼쪽 오른쪽 형식을 똑같이 맞춰주시면 자동으로 알아서 변수가 생성됩니다.
// a=10, b=100

// (2)
// useState()라는 함수는 state를 하나 만들어주는 함수입니다.
// (2)-2
// (이걸 이용하기 위해 위에 import {useState} 어쩌구를 추가했습니다.)
// useState( 저장할 데이터 ) 이렇게 사용하시면 state에 데이터를 저장하실 수 있습니다.

// 근데 useState()를 쓰면 데이터가 두개 남습니다. [데이터1, 데이터2] 이렇게 생긴 이상한 array가 남습니다.
// 이걸 각각 a와 b라는 변수명으로 ES6 destructuring 문법을 이용해 저장해서 쓰시면 됩니다.
// a라는 변수엔 실제 저장할 데이터가 들어있고
// b라는 변수엔 저장할 데이터를 변경시킬 함수가 들어있습니다.

// (2)-3
// useState 를 es6 destructuring문법으로 바꿈
// let [state, state변경] = useState(0);  / (영어 state, setState)
//( state데이터변경함수는 다음 강의에서 )

// (3)state에는 Array, Object,문자,숫자 모두 사용가능
//  array 사용 [ ]
// 1번째 데이터

function App4() {
  // (1)
  var [a, b] = [10, 100];

  // (2)-3
  let [문자, 문자변경함수] = useState("남자코트");

  //(3)
  let [state, setState] = useState(["state맛집1", "state맛집2"]);

  let posts = "변수";

  return (
    <div className="App">
    <p className="black-nav">04 state.중요한 데이터는 변수말고 state로 </p>
 
      <div className="list">
        <h3>{posts}</h3>        
      </div>

      <div className="list">
        <h3>{문자}</h3>        
      </div>

      <div className="list">
   // (3)
        <h3>{state[1]}</h3>
      </div>
    </div>
  );
}

//🦄 
//🦄 05(좋아요버튼 만들기) 버튼에 기능개발을 해보자 & state변경하는 법

// Q: 버튼 클릭할때마다 , 숫자 오르기

// (1) button, onClick, console.log확인
// onClick
// react문법  onClick = { ()=>{1+1} }  //  ( JS문법  onclick = "1+1" )
//  { } , 함수를 사용해야함.

// (2)-1
// state : state문자. 
// state function (State변겅) : state문자 변경하는 함수
// (영어) let [count, setCount]

// state변경이라고 만들어놓은 변수가 바로 state를 변경하기 위한 함수입니다. 
// state변경(1) 이라고 사용하시면 state가 1로 변경됩니다.
// state변경(100) 이라고 사용하시면  state가 100으로 변경됩니다. 

// 0 : defalut로 기본값 지정

// (2)-2  버튼클릭하면 숫자가 올라감
// state+1을 state변경 함수에 넣음
// 그럼 버튼을 누를 때 마다 state값이 바뀜
// 숫자표시에 {state} 데이터 바인딩...화면에 보여줌


// (5) eslint 문법체크 안보이게 하려면... 추가 ↑ 

function App5() {

  // (2)-1
  let [state, state변경] = useState(0); 

  return (
    <div className="App">
    <p className="black-nav">05(좋아요버튼 만들기) 버튼에 기능개발을 해보자 & state변경하는 법</p>
      <div className="list">
        <h3>
        // (1)
         <button onClick={() => { console.log(1); }}> console.log </button>
        //  (2)-2
         <button onClick={() => { state변경(state + 1); }}> +1 </button>
        <p> 숫자표시: {state}</p>
       </h3>
      </div>
     </div>
  );
}

//🦄
//🦄 06  spread operator : deep copy : 공유없이 독립적인 복사 (블로그 글 수정버튼 만들기)
// Q : 클릭하면 첫 글제목이 ‘여자코트 추천’ 으로 바뀌는 <button>을 만들어야합니다.
// state 데이터를 일부만 변경하고 싶을 땐 어떤 식으로 사용하는지 알아봅시다. 

// (1)) onClick={제목바꾸기}
// onClick안에 뭘 적을지가 문제입니다. 
// 일단 onClick 안에는 함수만 들어갈 수 있댔죠? 함수를 만들어 집어넣어봅시다.
// 만든 함수를 onClick안에 집어넣었습니다.
// 미리 정의된 함수를 넣으실 때는 소괄호를 넣지 않는게 포인트입니다 

// (2)
// 글state의 첫째 데이터를 변경할때,  state 변경함수를 꼭 사용하셔야합니다. 
// 글state만들 때 같이 만든 글state변경() 이라는 함수를 사용하시면 됩니다. 
// state 변경함수인 글제목변경()을 이용해서 제목바꾸기() 함수를 이렇게 디자인했습니다. 

// (3) 
//  프로그래머 스타일로 다시만들어보면
// 0. 글state는 직접 수정할 수 없습니다. 그래서.. 복사본을 만들기로 합니다.
// 1. 글state의 복사본을 만들어 newArray라는 변수에 저장합니다.
// 2. newArray의 0번째 데이터를 ‘여자코트 추천’으로 변경합니다.
// 3. 그리고 그걸 글state변경() 함수 안에 넣어서 글제목 state를 변경합니다.

// var data1 = [1,2,3];
// var data2 = data1;
// 이런 식으로 사용하면 data1에 있던 자료를 data2에 복사한다는 뜻이죠?
// 근데 data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라
// data1과 data2는 똑같은 값을 공유합니다. data1을 변경하면 data2도 자동으로 변경되고 그렇습니다. (충격)
// (자세한건 javascript reference data type이라고 검색해봅시다)

// 그래서 결론은 state도 등호 = 를 이용해서 복사하면 문제가 일어나기 때문에
// 완전히 개별 복사본을 만들어주는 deep copy 식으로 카피하셔야합니다.
// deep copy하면 서로 독립적임. 

// deep copy는 여러가지 방법이 있는데 가장 쉬운 방법은
// 그래서 결론은 state도 등호 = 를 이용해서 복사하면 문제가 일어나기 때문에
// 완전히 개별 복사본을 만들어주는 deep copy 식으로 카피하셔야합니다.
// 방법은 var newArray = [...글제목];

// (4)
// spread operator : ES6 신문법입니다. /  deep copy

// 뜻은 별거없고 중괄호나 대괄호를 벗겨주세요~ 라는 뜻입니다.  
// …[1,2,3] 이렇게 쓰시면
// 그 자리에 1,2,3 이 남습니다. 걍 괄호 벗기기용 연산자입니다.

// 근데 두번째 용도도 있는데 array나 object 자료형을 deep copy할 때 많이 사용합니다. 

// var data1 = [1,2,3];
// var data2 = [...data1]
// 그냥 data1에 있던 자료들을 괄호 벗긴담에 다시 array로 만들어주세요~ 라는 뜻인데

// array를 이런 식으로 사용하면, 완전 독립적인 array 복사본을 생성해주는 deep copy가 가능합니다. 
// 앞으로 deep copy 할 때 외워서 많이 쓰시면 되겠습니다.  

// object 자료형도 똑같이 deep copy 복사가능합니다.

// (5)
// 리액트에서 state를 수정하고 싶으면 보통 이런 패턴으로 코드를 짭니다. 
// 1. 수정하고 싶은 state의 deep 카피본을 하나 생성합니다. 
// 2. 카피본을 입맛에 맞게 수정합니다. 
// 3. 카피본을 state변경함수()에 집어넣습니다. 
// 이 패턴을 외워두시면 state 변경하는 법 마스터하신겁니다.


function App6() {
  let [글state, 글state변경] = useState(["남자", "강남", "파이썬"]);
  // (2)
  function 제목바꾸기() {
    글state변경(["여자", "강남", "파이썬"]);
  }
  
  // (3)
  function 제목바꾸기2() {
    // (3)-1.2.3 (4)
    var newArray = [...글state];
    newArray[0] = "여자코트 추천";
    글state변경(newArray);
  }
  return (
    <div className="App">
    <p className="black-nav">🦄06 spread operator : deep copy : 공유없이 독립적인 복사 (블로그 글 수정버튼 만들기)</p>
         // (1)           
        <button onClick={제목바꾸기}>제목바꾸기</button>   
         // (4) 
          <button onClick={제목바꾸기2}>제목바꾸기2</button>

      <div className="list">
        <h3>{글state[0]}</h3>
      </div>
             
    </div>
  );
}


// 🦄 07 Component : 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때
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
    <p className="black-nav">07 Component : </p>

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

//🦄 08 클릭하면 동작하는 UI (모달창) 만드는 법 .  Conditional rendering
// 바닐라js: sytle="displa:none"/"block".....

// (1)Component 선언 (<modal2></modal2>) 아무곳에 넣을수있음

// (2)react에서 if문법: Conditional rendering (조건연산자,삼항연산자) : 
//
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
    <p className="black-nav">08 클릭하면 동작하는 UI (모달창) 만드는 법 </p>

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

//🦄 09 .map( ): 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
  // (1) .map( )
  // 이름.map(콜백함수);
  // a: array의 하나하나 모든 data를 a(parameter)에 각각 대입함
  // [4,6,8]이 return됨
  // 보통 변수에 담아서 사용
  // console.log([뉴어레이]);  확인해보면 -> [ 4.6.8] 출력됨 

// (2) { }데이터바인딩 잊지말기
// (2-1)글제목state의 array갯수만큼 반복
// (2-2)arrow function 가능
// (2-3) [ ]안의 array갯수만큼 가능

// (3)반복할 html 추가
// (3-2) return ( )추가

// (4) (4-2) 글(parameter)는 array'글제목'안에 있던 하나하나의 데이터 

// (5) onClick적용가능? ㅇ

// (6) for 반복문
// 빈 array[]
// 3번 반복
// push로 html넣음
// return
// (6-2) js에서는 이렇게 실행, 리엑트에서는 jsx안으로 이동+ 데이터바인딩 { }

function App9() {  

// (1)예시 설명
  var 어레이 =[2,3,4];
  var 뉴어레이 = 어레이.map(function(a){ return a*2 })
  console.log([뉴어레이]);
  
// (2)
  let [글제목, 글제목변경] = useState(["남자", "강남", "파이썬"]);

  // (5)
  let [state, state변경] = useState(0);

  // (6) for 반복문

  function for반복문함수(){    
    var 어레이 = [];
    for (let i = 0; i < 3; i++) {
     어레이.push(<div>for반복문함수</div>);  }
    return 어레이
  }
// (6-2)
  //  for반복문함수();

  return (
   <div className="App">
    <p className="black-nav"> 09 .map( ): 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때 </p>

    // (2) (2-1)
    {
      글제목.map(function(){
        return <div>글제목</div>
      })
    }
    // (2-2)  
    {
      글제목.map(()=>{
        return <div>글제목</div>
      })
    }

    //(2-3))
    {
      [1,2].map(function(){
        return <div>2번 반복</div>
      })
    }
    // (3) (3-2)
    {
      글제목.map(function () {
        return(
          <div className="list">
          <h3>{글제목[0]}</h3>
         </div>
        ) })
     }

    //   (1) (4)
    {
      글제목.map(function (글) {
        return(
          <div className="list">
          // (4-2)
          <h3>{글}</h3>
         
        </div>
        ) })
     }

    //  (5)
    {
      글제목.map(function (a) {
        return(
          <div className="list">
          <h3>{a} <h3> <button onClick={ ()=>{ state변경 (  state  + 1) }}> 👍</button> {state} </h3> </h3>
           </div>
        ) })
     }

    //  (6)
    {for반복문함수()}

   </div>
  );
}

//🦄 10 props : 자식이 부모의 state를 가져다쓰고 싶을 땐 말하고 쓰셔야합니다
// parent Component , child Component
// (1) <자식컴포넌트 전송할이름={state명}> 이렇게 사용해주신 후
// (1-2) =의미 : 글제목state를 { }데이터바인딩해서 mynaming에 집어넣음

// (2) 자식컴포넌트 선언하는 function 안에 파라미터 props 를 하나 만들어주시면 됩니다. 
// (2-2) Props 파라미터 : 부모에게 전달받은 props가 들어감
// (2-3) props 이름 마음대로 정할수있음. 그냥 관습적으로 props사용
// (2-4) props.mynaming[1] 1번째 array사용 : "강남"

function App10() {
  // (4)

let [state, state변경] = useState(["남자", "강남", "파이썬"]);


  return (
   <div className="App">
    <p className="black-nav">10 props : 자식이 부모의 state를 가져다쓰고 싶을 땐 말하고 쓰셔야합니다 </p>
    // (1) (1-2)
    <Modal3 mynaming={state}></Modal3>
   </div>
  );
}

// (2) (2-2)
function Modal3(props){
  return(
    <div>
     <div className='modal'>
     // (2) (2-4)
        <h2>title {props.mynaming[1]}</h2>
        <p>date</p>
        <p>date</p>
     </div>
      <div></div>
    </div>
  )
}

//🦄 11 (UI 제작 패턴) props를 응용한 상세페이지 만들기
// (1)버튼 누를때 modal창이 바뀌게
// (1-2)변수.. state로 만듬. 기본값 0
// (1-3) propsclicked제목 만들어서 props글제목[ ] 안에 넣음
// (1-4) clicked제목변경을 0,1,2 으로 바꾸면 완성 ( -> props글제목[0] props글제목[1] props글제목[2] )

// (2) button 누를때, modal창이 바뀌게
// map()
// map 반복문을 쓸 때 i라는 파라미터를 뒤에 추가해주시면 됩니다. 
// 두번째 파라미터는 바로 반복문이 돌면서 0,1,2,3 … 이렇게 하나씩 증가하는 정수를 뜻합니다.
// 전문 개발용어로 enumerate한다 라고 하는데 그건 알필요가 없고
// 그냥 i 저렇게 써주시면 0,1,2,3,4… 이런 변수입니다. 


function App11() {



// (1-2)
let[clicked제목,clicked제목변경]=  useState(0);
// (1-3)
let [글제목, 글제목변경] = useState(["남자", "강남", "파이썬"]);

  return (
   <div className="App">
    <p className="black-nav">11 (UI 제작 패턴) props를 응용한 상세페이지 만들기 </p>

    // (1) (1-4)
      <button onClick={ ()=>{ clicked제목변경(0) } }>button1</button>
      <button onClick={ ()=>{ clicked제목변경(1) } }>button2</button>
      <button onClick={ ()=>{ clicked제목변경(2) } }>button3</button>


    // (1-3)
      <Modal4 props글제목={글제목} propsclicked제목={ clicked제목 } ></Modal4>
    
    // (2)
    {
      글제목.map(function (글,i) {
        return(
          <div className="list">
          <button onClick={ ()=>{ clicked제목변경(i) } } >{글}  </button>
          </div>
        ) })
     }
   </div>
  );
}


function Modal4(props){
  return(
    <div>
      <div className='modal'>
      // (1-3)
          <h2>title {props.props글제목[props.propsclicked제목] } </h2>
          <p>date</p>
          <p>date</p>
      </div>
      <div></div>
    </div>
  )
}


//🦄 12 input 다루기 1 : 사용자가 입력한 글을 변수에 저장하는 법
// Q: input입력한 값 
// (1) 2가지 방법 사용 가능  <input/> , <input></input>

// (2)사용자가 input에 입력한 value를 state에 저장함
// ""초기값..빈칸으로 설정

// (2-2)  onInput / onChange :
//  input에 무언가 입력할 때마다 특정 함수를 동작시키고 싶을 때 사용합니다.( 입력이 될때 , 안의 함수가 실행됨.)
// JS에서는 다른의미인데, react에서는 같은 의미로 쓰임.
// (내 컴퓨터에서는 onInput만 제대로 동작했음)

// (2-3)
// 그래서 입력할 때마다 console.log(e.target.value)를 콘솔창에 출력하라고 써놓은 것입니다. 
// e.target이라는건 쌩자바스크립트 문법으로 ‘지금 이벤트가 동작하는 HTML요소’
// .value라는건 input등에 입력한 값을 의미합니다. 

// (2-4)
// e.target.value (input 에 입력한 값)에 따라서 ,입력값변경state가 변경됨

// (2-5)
// 변경된 입력값 출력

// (3)
// warning 과 error는 다름. warining떠도 실행에는 문제가 없음
// 리액트는 반복문(map ,for...etc) 돌린 HTML 요소엔 꼭 key={}를 적으라고 권장합니다. 
// key={} 안에는 반복문이 돌 때마다 0,1,2,3… 이렇게 하나씩 증가하는 변수같은걸 넣어주시면 됩니다. 

function App12() {
  let[clicked제목,clicked제목변경]=  useState(0);
  let [글제목, 글제목변경] = useState(["남자", "강남", "파이썬"]);

  // (2)
  let[입력값,입력값변경]=useState('');
      
    return (
     <div className="App">
      <p className="black-nav">12 input 다루기 1 : 사용자가 입력한 글을 변수에 저장하는 법 </p>
  
      // (1) (2-2)
      <input type="text" onChange={ ()=>{ console.log('안녕') } }/>

      // (2-3)
      <input type="text" onInput={ (e)=>{ console.log(e.target.value ) } }/>
      
      // (2-4)
      <input type="text" onInput={ (e)=>{ 입력값변경(e.target.value ) } }/>
     
      // (2-5)변경된 입력값 출력 : 
        { 입력값} 

      {
        글제목.map(function (글,i) {
          return(
            // (3)
            <div className="list" key={i}>
            <button onClick={ ()=>{ clicked제목변경(i) } } >{글}  </button>
            </div>
          ) })
       }
     </div>
    );
  }
  
//🦄 13 input 다루기 2 : 블로그 글발행 기능 만들기
// Q: 글 적고 저장버튼을 click 때 글이 하나 추가되게 하기

// (1) onInput : 입력한 글... 입력값state에 저장
// (1-2) onClick : 저장버튼 click, 입력값state에를, 글제목state.array에추가
// 여기에 코딩하거나,  function으로 따로 코딩 후 호출 (단순코딩..끝)

// (2)unshift : array 맨앞에 data추가하는 문법
// 글제목state array에 '입력값state'추가
// 글제목변경state에 글제목state 추가
// but state(글제목state)를 그대로 쓰는것은 나쁜습관  - (실행안됨)

// (2-2)spread operator : state는 바로 쓰면안되고, 다른변수에 담아서(복사해서) 사용해야함.
// 글제목state 를 arrayCopy에 담아서(복사해서)
// arrayCopy를 사용할 것  (끝)

  function App13 (){

    // (1-2)
    let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    // (1)
    let[입력값,입력값변경]=useState('');

    return (
      <div className="App">
      <p className="black-nav"> 13 input 다루기 2 : 블로그 글발행 기능 만들기 </p>
      <div>
     
      {
        글제목.map(function (글,i) {
          return(
            <div className="list" key={i}>
            <h3>{글}</h3>           
          </div>
          ) })
       }                

        <div className="publish">
        // (1)
          <input  onInput={ (e)=>{(입력값변경(e.target.value))}  }/>
          // (1-2)
          <button onClick={ ()=>{ 글제목변경(  [입력값,'남자코트추천', '강남우동맛집', '파이썬독학'] ) }  }>저장</button>
        </div>

        <div className="publish">
              <input  onInput={ (e)=>{(입력값변경(e.target.value))}  }/>   
          <button onClick={ ()=>{
                 //  (2)
            글제목.unshift(입력값);
            글제목변경( 글제목 ) }}>저장</button>
        </div>

        <div className="publish">
          <input  onInput={ (e)=>{(입력값변경(e.target.value))}  }/>
            <button onClick={ ()=>{
            // ajax로 서버에 보내는 코딩 추가 (나중에 공부)
                 // (2-2)
            var arrayCopy = [...글제목]
            arrayCopy.unshift(입력값);
            글제목변경( arrayCopy ) }}>저장</button>
                  </div>
      </div>

   
      </div>
    )
  }

//🦄 14 old react 문법 : class를 이용한 옛날React 문법
// (1)
// 1. class를 하나 만들고 이름짓습니다.
// 2. 그리고 React.Component라는 이상한 것을 extends한다고 써줍니다.
// 3. constructor(){} 함수를 언급해줍니다.
// 3. render(){} 함수 안에 원하는 HTML을 적습니다.

// (1-2)
// 그럼 이제 <Profile />을 원하는 곳에 첨부하면 Component 만들기 끝입니다.
  
// (2)class
// class는 변수/함수를 보관하는 덩어리입니다.
// extends는 덩어리를 만들 때 오른쪽에 있는 놈 성질을 물려받아서 class덩어리를 만들겠다는 소리입니다.
// React.Component는 컴포넌트 성질을 갖고있는 덩어리입니다.
// 이것을 extends 해서 class를 만들면 우리가 계속 사용해왔던 컴포넌트를 만들어낼 수 있습니다.
// (리액트 라이브러리 사용법일 뿐입니다)

// (3)state저장
// 1. state저장할 땐 constructor() 안에 this.state 라는 변수에 전부 보관하셔야합니다.
// constructor()라는 부분은 변수와 함수가 가득한 class 덩어리를 만들 때.. 새로운 변수를 넣는 공간입니다.
// super()는 “extends 했던 React.Component 라는 덩어리에 있던 변수들을 그대로 물려받아 쓰겠습니다~” 라는 뜻이고 꼭 먼저 써주셔야 super() 밑에서 state를 만들 수 있습니다.

// (3-2) this.state.state명
// // 2. 그리고 꺼내쓸 때는 this.state.state명 이렇게 쓰시면 됩니다.

// (4) state변경 .  setState
// 버튼을 누를 때 이름을 ‘Park’으로 변경하는 기능을 만들어봅시다.
// onClick이라든지 이런건 똑같습니다. 근데 state를 변경하실 때는 setState라는 정해진 함수이름을 쓰셔야합니다.
 
// 1. 버튼만들고 onClick 이런거 넣는건 똑같습니다.
// 2. state를 변경하실 땐 this.setState() 라는 내장함수를 꼭 쓰셔야합니다.
// 그리고 소괄호()안에는 바꾸고 싶은 state 이름과 값만 적어주시면 됩니다.
 
// 주의) 신문법으로 만든 state 변경함수들은 아예 state를 바꿔치기해주는 역할인데
// 예전문법 setState()는 딱 필요한 부분만 수정해주고 나머지는 건들지 않습니다.

// (5)changeName (JS. class문법안에서 함수 만드는 문법)
// 1. 버튼안에 있는 코드가 너무 길어서 함수로 빼고 싶어서 함수를 만들었습니다.
// 2. 모든 커스텀 함수는 저기 저 changeName 자리에 만들어주시면 됩니다. 그리고 필요한 코드를 담습니다.
// 3. 그리고 changeName 이라는 함수 이름을 필요한 자리에 넣어줬습니다. 근데 this 까먹지맙시다.

// 맞는 방법인데 에러가납니다.
// 왜냐면 this.setState()라는 코드의 this가 이상해져서 그렇습니다.
// 자바스크립트에선 function(){} 을 쓴다면 안에있는 this값이 새롭게 재정의됩니다.
// 그래서 this.setState()에서 사용할 this값도 의도와는 다르게 변형되고만 것입니다.

// (5-2)
// 그래서 this가 재정의되지않게
// 그래서 1. 함수를 쓸 때 this.changeName.bind(this) 이렇게 사용하시거나

// (5-3)
// 아니면 2. 함수를 아예 arrow function으로 바꿔주시면 됩니다.

  function App14 (){
    return (
      <div className="App">
        <p className="black-nav"> 14 class를 이용한 옛날 옛적 React 문법 </p>
                 
        // (1-2)
        <Profile/>
      </div>
    )
  }

// (1) (2)
  class Profile extends React.Component{
    constructor(){
      // (3)
      super();
      this.state ={ name: 'Kim', age : 30}
    }

    // (5)
    changeName(){
      this.setState( {name:'function Park'} )
    }

    // (5-3)
    changeName2 = ()=>{
      this.setState( {name:'function Park'} )
    }

    render(){
      return( <div>
        <h3>프로필입니다.</h3>
        // (3-2)
        <p>저는 {this.state.name}입니다.</p>
        // (4)
        <button onClick={ ()=>{ this.setState({name:'park'})  } }>state변경</button>
        // (5)
        <button onClick={ this.changeName}>state변경 error</button>
        // (5-2)
        <button onClick={ this.changeName.bind(this)}>state변경 bind(this)</button>
        // (5-3)
        <button onClick={ this.changeName2}>state변경 arrow function</button>

        </div>)          
    }
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
      <App9/>      
      <App10/>      
      <App11/>      
      <App12/>      
      <App13/>      
      <App14/>      
    </div>
  )
}

export default App;

