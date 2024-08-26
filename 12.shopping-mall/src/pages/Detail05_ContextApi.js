import { useContext, useEffect, useState } from "react";
import { Nav, Container,Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css'
import {Context1} from './../App';

function Detail (props) {

    //  useContext() : Context1을 해체 {stock, clothes}
    /* 1방법
    let a = useContext(Context1);
    console.log(a);
    console.log(a.stock);
    */  
    // 2방법
      let {stock, clothes} = useContext(Context1);
      console.log(stock);
      console.log(clothes);
    // -- 

      let {index} = useParams();

      let findId = props.clothes.find(function(x) {
        return x.id == index;
      })
    
      let [alert, setAlert] = useState(true);    
      let [count, setCount] = useState(0);

      useEffect(() => {
       let timer = setTimeout(() => {setAlert(false)}, 1000)
        return () =>{
            // 기존 타이머 삭제
            clearTimeout(timer);
        }
        
      },[alert])
    // alert(은 재렌더링이 됨) 창 띄우기

    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) { // Not a Number 숫자이면 false, 문자이면 true
            alert('그러지마요');
        }
    }, [num])


    let [tab, setTab] = useState(0);

    let[fade2, setFade2] = useState('start')
    
    useEffect(() => {
        setFade2('end')
    }, [])


    return (
        <div>
            <input onChange={(e) => {setNum(e.target.value)}} />
            {alert ? <h2>2초 이내 구매시 할인</h2> : null}
            
            <Container className={fade2}>
            <Row>
                <Col lg={6}>
                    <img src={`${process.env.PUBLIC_URL}/img/imagecopy${findId.id+1}.png`} />
                </Col>
                <Col lg={6}>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}</p>
                    <Button variant="outline-secondary">주문하기</Button>
                </Col>
            </Row>
            </Container>

             <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link0" >Button 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">Button 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">Button 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} /> 
        </div>

       

    )
}
    // 애니메이션
    function TabContent({tab}) {
        let[fade, setFade] = useState('')

        let {stock} = useContext(Context1);

        useEffect(() => {
            setTimeout(() => {setFade('end')},100)  //0.1초 뒤 end
            return () => {
                setFade('start')
            }
        }, [tab])


        return(
            // className= {`start ${fade}`} 가능 
        <div className={fade}>
             { [<div> {stock} </div>, <div>{stock[1]} </div>, <div> {stock[tab]} </div> ][tab] }
        </div>
    )
   
}

export default Detail;