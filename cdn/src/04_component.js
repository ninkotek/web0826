/*  
    컴포넌트(구성요소)?
    html요소를 반환하는 함수와 같습니다.

    종류
        1. 클래스형 컴포넌트 -> Hooks 지원 x
        2. 함수형 컴포넌트 -> 이걸 사용 Hooks 지원 o

        -> 반환(return), 독립적, 재사용 가능한 코드 조각
        -> 독립적 -> 별도의 파일로 만들어 사용


    1. 컴포넌트 형식
      function 컴포넌트(){
        return (
            html 요소
        );
      }

      가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
      나. return 키워드 필수!
      마. JSX 문장이 한 문장일 경우 (); 생략 가능
*/
//클래스형 컴포넌트
//extends는 상속
//React.Component는 부모 컴포넌트
//클래스형 컴포넌트는 반드시 React.Component을 상속(extends) 받아 사용자 컴포넌트인 Car컴포넌트를 생성한다. 
//render()메서드를 사용해야 한다.
class Comp0 extends React.Component {
    render() {
      return <h2>난 클래스 컴포넌트야!</h2>;
    }
  }
  //함수형 컴포넌트
  //상속 받지 않는다. render() 필요 없다. 
function Comp1() {    
    
      return <h2>난 함수형 컴포넌트야!</h2>;    
  }

// HTML DOM 요소 가져오기
const container0 = document.querySelectorAll(".item").item(0);
// 리액트 가상돔 요소 생성
const root0 = ReactDOM.createRoot(container0);
root0.render(<Comp1 />);

const container1 = document.querySelectorAll(".item").item(1);
// 리액트 가상돔 요소 생성
const root1 = ReactDOM.createRoot(container1);
root1.render(<Comp1 />);




// 컴포넌트 생성
function Hello() {
    // 리턴 뒤에 한 줄 문장
    // return <h1>Hello World!</h1>
    // 리턴 뒤에 두 줄 이상의 문장은 ( ); 로 묶고 문장 끝 ; 쓴다.
    return (
        // JSX의 태그 끝에는 ; 쓰지 않는다.
        // return 안의 root 태그는 1개 이어야 한다.
        <div className="card_list">
            {/* XML에서 빈 요소는 끝에 <img /> */}
            <div className="card_img">
                <img
                    src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
                    alt="사랑의 하츄핑"
                />
            </div>
            <div>
                {/* {{}} -> 바깥쪽 괄호는 표현식 */}
                {/* {{}} -> 안쪽 객체 괄호 */}
                {/* 객체로 스타일을 지정한다. */}
                {/* 속성명은 카멜표기법으로 쓴다. 예) borderRadius 또는 "border-radius" */}
                <span className="card_age">All</span>
                {/* class -> className 으로 기록한다.*/}
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span className="card_rate">예매율 1%</span>
                <span className="card_date">개봉일 2024.08.07</span>
            </div>
            <div className="card_btn">
                <button>487</button>
                <a href="#">예매</a>
            </div>
        </div>
    );
}




