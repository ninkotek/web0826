/*  

*/

// 변수 선언
//여기서 값은 jsx


const hi = (
  //반드시 최상의 부모는 하나
  <div>
    <hi>Hi World!</hi>
    <h2>나는 두 문장이다.</h2>
  </div>
);



/* 
//라이브러리 이름: -> CDN방식에 필요
React, ReactDOM(가상돔), Babel(jsx번역)

// 리액트의 출력
//객체.메서드
// 출력 방법 1
    ReactDOM.render(element, container); 

      1. ReactDOM은 가상 DOM을 생성하는 객체
      2. render()은 요소를 컨테이너에 넣는 메서드
      3. element는 변수명으로 쓴다. 
      3. 요소는 컴포넌트명의 리턴 값을 XML의 빈 요소로 쓴다.
        예) <Hello />, <img />, <input />
        빈요소가 아닌 경우 ->  <hello>내용</hello>
      4. 컨테이너는 HTML 페이지의 div#root를 말한다.

      ReactDOM.render(hello, document.getElementById("root"));


// 출력 방법 2-> 렌더링

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

(5) ReactDOM.createRoot()는 html 요소를 가져와서 새롭게 루트(root)를 생성한다. 

*/
ReactDOM.render(hi, document.querySelectorAll(".item")[0]);

// HTML DOM 요소 가져오기
const container = document.querySelectorAll('.item')[1];
//리액트 가상돔 요소 생성
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);