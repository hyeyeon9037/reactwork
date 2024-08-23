import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Outlet, Link, Route, Routes, useNavigate } from 'react-router-dom'; 
import Detail from './pages/Detail';

function App() {
  let [clothes, setClothes] = useState(pList);
  
  // 페이지의 이동을 도와주는 함수
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
                  <PListCol clothes={p} i={i+1}/>
                )
              })
            }
          </Row>
      </Container>
      </div>} />

        <Route path='/detail/:index' element={<Detail clothes={clothes} bg={"green"}/>} />
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
          <p>{props.clothes.price}</p>
        </Col>
      </>
    )
}
export default App;
