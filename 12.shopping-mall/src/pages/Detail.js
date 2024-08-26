import { useEffect, useState } from "react";
import { Nav, Container,Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css'
// './..'   . 은 지금내가있는 폴더에서 
//          /.. -> 상위폴더로

/*
    탭 만들기
*/

/*
    애니메이션 만들기
    1) 애니메이션 동작 전 스타일을 담을 className 설정
    2) 애니메이션 동작 후 스타일을 담을 className 설정
    3) transition으로 ??초동안 변하게 
    4) 원할 때 동작 전 className을 동작 후 className으로 변경

*/

function Detail (props) {

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


    return (
        <div>
            <input onChange={(e) => {setNum(e.target.value)}} />
            {alert ? <h2>2초 이내 구매시 할인</h2> : null}
            
            <Container>
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
            
            {/* state가 0이면 내용0을 보여주기 */}

            {/* 1. 삼항연산자 사용 */}
            {/* { tab == 0 ? <div>내용 0</div> : tab ==1 ? <div> 내용1 </div> : <div> 내용2 </div>} */}

            {/* 2. component 사용 */}
            <TabContent tab={tab} /> 
        </div>

       

    )
}
    // 2. component 사용 (if문으로)
    // function TabContent({tab}) {
    //     if(tab == 0)
    //         return <div> 내용 0 </div>
    //     else if(tab == 1)
    //         return <div> 내용 1 </div>
    //     else
    //         return <div> 내용 2 </div>    

    // }

    // 배열 리턴

    function TabContent({tab}) {
        let[fade, setFade] = useState('')

        useEffect(() => {
            setTimeout(() => {setFade('end')},100)  //0.1초 뒤 end
            return () => {
                setFade('start')
            }
        }, [tab])

        return(
            // className= {`start ${fade}`} 가능 
        <div className={fade}>
             { [<div> 내용 0 </div>, <div> 내용 1 </div>, <div> 내용 2 </div> ][tab] }
        </div>
    )
   
}

export default Detail;