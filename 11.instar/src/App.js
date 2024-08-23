import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title, setTitle] = useState(["💋", "💎", "🎀"]);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0); // div의 index 번호 변경, [0,1,2]
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
        <h2 className="title">효빈이 추천 INSTAR</h2>
        {/* 원본이 바뀌기때문에 이렇게 쓰면 안돼 ! <button onClick={() => {setTitle('김효빈')}}>글 수 정</button> */}
        <button onClick={() => {
          let copy = [...title];
          copy[0] = "🧡김효빈 존나 귀여워🧡";
          copy[1] = "💓김효빈 존나 사랑해💓";
          copy[2] = "💛김효빈 존나 발랄해💛";
          setTitle(copy);
        }}>글 수 정</button>

        {
          title.map(function(t, i) {
            return(
              <div className="list" key={i}>
                <h4 onClick={() => {setModal(!modal); setModalIndex(i)}}>{t}</h4>
                <p>💗효빈이💗  <span onClick={() => {
                    let copy = [...count];
                    copy[i] = copy[i] +1;
                    setCount(copy);
                  }}> 🥰</span>{count[i]}</p>
                  <button onClick={() => {
                      let copy = [...title];
                      copy.splice(i,1); 
                      setTitle(copy);
                  }}>삭제</button>
              </div>
            )
          })
        }


        <input onChange={(e) => {console.log(e.target.value); setInputValue(e.target.value)}} />
        <button onClick={() => {
            let copy = [...title];
            copy.unshift(inputValue); 
            setTitle(copy);
        }}>글 추가</button>

      { modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle}/> : null}

      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.title[props.modalIndex]}</h4>
      <p>효비니의 생일💜</p>
      <p>상세 내용💛</p>

    <button onClick={() => {
      let copy = [...props.title];
      copy[props.modalIndex] = "효비닝💖";
      props.setTitle(copy);
    }}>글 제목 수정</button>

    </div>
  )
}

export default App;
