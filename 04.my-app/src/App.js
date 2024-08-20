import logo from './logo.svg';
import './App.css';

function App() {

  const isStudent = true;

    return (
      <div>
        {/*  /* 삼항 연산자로 인식하게 하려면 {}을 넣어야 한다 중괄호가 없으면 글자로 인식한다*/}
      {isStudent == true ? <h1>학생입니다.</h1> : <h1>학생이 아닙니다</h1>}
      </div>
    )
}

export default App;
