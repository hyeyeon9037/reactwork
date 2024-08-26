import logo from './logo.svg';
import './App.css';
import Views from './component/Views';
import Controller from './component/Controller';
import { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 방법1 -> function으로 쓰기
  function onChangeInput(e) {
    setText(e.target.value);  
  }

  // 방법2 -> const로 쓰기
  const onClickBtn = (value) => {
    setCount(count + value);
  }

  // useEffect() : 재렌더링이 완료되었을 때 내가 정의 한 함수 실행
  // lifecycle을 제어하는데 사용, 타이머
  useEffect(() => {
    console.log("update : " + count + ", " + text );
  }, [count, text]);

  return (
    <div className="App">
        <h1>Counter</h1>
        <input value={text} onChange={onChangeInput}/> <br/><br/>
        <Views count={count} />
        <Controller onClickBtn={onClickBtn} />
        {/* Controller의 <button onClick={() => {onClickBtn(-1)}}>-1</button>가 들어감 */}
    </div>
  );
}

export default App;
