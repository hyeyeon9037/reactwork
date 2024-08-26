import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button} from 'react-bootstrap';
import { createContext, useState } from 'react';
import pList from './data/ProductList';
import { Outlet, Link, Route, Routes, useNavigate } from 'react-router-dom'; 
import Detail from './pages/Detail';
import axios from 'axios';

/*
    * single page application의 단점
        - 컴포넌트 사이의 state공유 어려움
        - props로 넘겨줘야한다.

    * 공유하는 파일을 만들어서 사용
        1. Context Api 문법
           - 잘 사용하지 않음
           - 성능 이슈
           - 재사용이 어렵다
        2. Redux 같은 외부 라이브러리를 주요 사용
           - 주로 사용        
*/

// 1. Context Api
/*
   순서
   1) createContext() 로 보관함 만들기
   2) Context1.Provider로 감싸기!
   3) 하위 컴포넌트에 사용 : useContext(Context1)
*/

// createContext() : 보관함을 하나 만들었다 생각하면 된다.
export let Context1 = createContext();

function App() {
  let [clothes, setClothes] = useState(pList);
  let [page, setPage] = useState(2);

  let navigate = useNavigate();

  let [stock, setStock] = useState([10, 7, 5])

  return (
    <div className="App">
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
      <Route path='/' element={
        <div>
          Root페이지
          <div className='main-bg'/>
        <Container>
          <Row>
            { 
              clothes.map((p, i)=>{
                return(
                  <PListCol clothes={p} i={i+1}/>
                )
              })
            }
          </Row>
      </Container>
      
      <Button variant="info"onClick={()=>{
        axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${page}.json`)
              .then((result)=>{
                console.log(result);
                setClothes([...clothes, ...result.data]);
                setPage(page+1);

              })
              .catch(()=>{
                console.log('실패');
                alert('더 이상 상품이 없습니다.')
              }

              )
      }}>서버에서 데이터 가져오기</Button>
      </div>} />

        <Route path='/detail/:index' element={
          // <Context1.Provider value={{stock, clothes}}> 여러개 넘어줄땐 이렇게 !
          <Context1.Provider value={stock}>
          <Detail clothes={clothes} />
          </Context1.Provider>
          } />
        <Route path='*' element={<div>없는 페이지입니다.</div>}/>

      </Routes>
    </div>
  );
}

function PListCol(props) {
    return (
      <>
          <Col lg={4}>
          <img src={`${process.env.PUBLIC_URL}/img/imagecopy${props.i}.png`} /> 
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.content}</p>
          <p>{props.clothes.price}</p>
        </Col>
      </>
    )
}
export default App;
