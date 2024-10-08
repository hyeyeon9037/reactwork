import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button} from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Outlet, Link, Route, Routes, useNavigate } from 'react-router-dom'; 
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

/*
  장바구니 만들기
  외부 라이브러리 사용 (Redux)
  1) 설치 : npm install @reduxjs/toolkit react-redux
  2) store 폴더 만들고, store.js 파일을 만들기 
   
*/


function App() {
  let [clothes, setClothes] = useState(pList);
  let [page, setPage] = useState(2);

  let navigate = useNavigate();

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
                  <PListCol clothes={p} i={i+1} key = {i}/>
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
        <Route path='/detail/:index' element={<Detail clothes={clothes} bg={"green"}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>없는 페이지입니다.</div>}/>

      </Routes>
    </div>
  );
}

function PListCol(props) {
    return (
      <>
          <Col lg={4}>
          <Link to ={`/detail/${props.i}`}>
          <img src={`${process.env.PUBLIC_URL}/img/imagecopy${props.i}.png`} /> 
          </Link>
      
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.content}</p>
          <p>{props.clothes.price}</p>
        </Col>
      </>
    )
}
export default App;
