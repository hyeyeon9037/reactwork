import logo from './logo.svg';
import './App.css';
import { Fragment, React } from 'react';
import Fragment 'ReactDOM'

function App() {
  //주석
  /* 여러줄 주석 */
  //return <h1>React 처음 시작</h1>

  /*
    return안이 여러줄 일 때
    1. 소괄호를 반드시 넣어준다
    2. 루트 태그를 반드시 넣어준다.
  */

  return(
    <Fragment> {/* 여러줄 일때는 반드시 최상위 태그가 존재해야 된다 */}
      <h1>React</h1>
      <h2>여러줄 리턴</h2>
      {/* 주석 */}
    </Fragment>
  )

}

export default App;
