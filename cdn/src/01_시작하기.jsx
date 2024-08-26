/*  
    1. 컴포넌트 형식
      function 컴포넌트(){
        return JSX 문장;
      }

      가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
      나. JSX의 태그 끝에는 ; 을 쓰지 않는다.
*/

// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    // return <h1>Hello World!</h1>
    // 리턴 뒤에 두 줄 이상의 문장은 ( ); 로 묶고 문장 끝 ; 쓴다.
    return (
        // JSX의 태그 끝에는 ; 쓰지 않는다.
        // return 안의 root 태그는 1개 이어야 한다.
        <div style={{margin: "12px"}}>
            {/* XML에서 빈 요소는 끝에 <img /> */}
            <img
                src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
                alt="사랑의 하츄핑"
            />
            <div>
                {/* {{}} -> 바깥쪽 괄호는 표현식 */}
                {/* {{}} -> 안쪽 객체 괄호 */}
                {/* 객체로 스타일을 지정한다. */}
                {/* 속성명은 카멜표기법으로 쓴다. 예) borderRadius 또는 "border-radius" */}
                <span
                    style={{
                        padding: "0 4px",
                        borderRadius: "3px",
                        background: "red",
                    }}
                >
                    All
                </span>
                {/* class -> className 으로 기록한다.*/}
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span>예매율 1%</span>
                <span>개봉일 2024.08.07</span>
            </div>
            <div>
                <button>❤ 487</button>
                <button>예매</button>
            </div>
        </div>
    );
}

function App(){
  return (
    <div style={{display: "flex"}}>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

/* 
    ReactDOM.render(요소, 컨테이너); 
      1. ReactDOM은 가상 DOM을 생성하는 객체
      2. render()은 요소를 컨테이너에 넣는 메서드
      3. 요소는 컴포넌트의 리턴 값을 XML의 빈 요소로 쓴다.
        예) <Hello />
      4. 컨테이너는 HTML 페이지의 div#root를 말한다.
*/

// 출력 -> 렌더링
ReactDOM.render(<App />, document.querySelector("#root"));
