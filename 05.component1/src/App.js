import logo from './logo.svg';
import './App.css';

const user = {
  firstName : "Hong",
  lastName : "GilDong"
}

// 함수를 정의할때에는 Student의 맨 앞글자 s는 대문자를 써준다.
function Student(u) {
  return user.firstName + " " + u.lastName;
}

function App() {
  
  const isStudent = true; // false 하면 학원생이아닙니다로 뜸

  return (
    <div className="App">
      <Com1/> 
        <h1>The Joeun React 2024</h1>
        <h3>component 실습</h3>

        {isStudent ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다.</h4>}

        <Com1></Com1>
        <Com1/> 
        {/* Com1을 1번쓰면 1개나오고 2개쓰면 2개나옴 */}
    </div>
  );
}

function Com1() {
  return (
    <>
      <h2>[THIS IS COMPONENT]</h2>
      <p>K-Digital Training</p>
      <p>의료용 AI 연동 개발 실무 프로젝트</p>

    </>
  )
}

export default App;
