import {Container,Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail (props) {
    // let {index, member} = useParams();
    // console.log(index);
    // console.log(member);

    let index 

    return (
        <>
            <Container>
            <Row>
                <Col lg={6}>
                    <img src={`${process.env.PUBLIC_URL}/img/imagecopy${Number(index)+1}.png`} />
                </Col>
                <Col lg={6}>
                    <h4>{props.clothes[index].title}</h4>
                    <p>{props.clothes[index].content}</p>
                    <p>{props.clothes[index].price}</p>
                    <Button variant="info">주문하기</Button>
                </Col>
            </Row>
            </Container>    
        </>
    )
}

export default Detail;