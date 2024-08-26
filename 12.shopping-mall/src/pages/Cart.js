import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
    
    // 변경시 1.
    // import { changeName, increase } from '../store/store';

    // userSlice로 분할 후 import
    import { changeName, increase } from '../store/userSlice';

function Cart() {   

    // let state = useSelector(() => {return this.state})
    // console.log(state);
    // console.log(state.user);

    //let state2 = useSelector(state => state.member) // 원하는 것만 가져오기
    let state = useSelector(state => state)
    let user = useSelector(state => state.member)
    let stock = useSelector(state => state.stock)
    let jacket1 = useSelector(state => state.jacket)
     // 변경시 2.  store.js에 요청을 보내는 함수
     let dispatch = useDispatch();
    return (
        <div className='cart'>
        <br/>
        <h2>{user.name}{user.age}의 CART LIST</h2>
        <br />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                jacket1.map(c =>{
                    return(
                    <>
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.title}</td>
                            <td>{c.count}</td>
                            <td>
                                <Button variant="outline-secondary" onClick={() => {
                                    dispatch(increase(1))
                                    //           ↑ 1씩 증가시킨다는 말
                                }} >
                                     + 
                                </Button>
                            </td>
                        </tr>
                    </>
                    )
                })
            }
              
            </tbody>
          </Table>
        </div>
    )
}

export default Cart;

/*
import { Table } from 'react-bootstrap';
import {useSelector} from 'react-redux';


function Cart() {
    
    let state = useSelector((state) => {return state})
    console.log(state);
    console.log(state.user);
    

    let state2 = useSelector(state => state.member) // 원하는 것만 가져오기
    let stock = useSelector(state => state.stock)
    let market = useSelector(state => state.market)
    let ma2 = useSelector(state => state.ma1)
    
    return (
       
        <div className='cart'>
        <br/>
        <h2>{state2}의 CART LIST</h2>
        <br />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                    {
                        market.map((m, i) => {
                            return(
                                <MarketList m={m} i={i+1} />
                            )
                        })
                    }

                    {
                        ma2.map((m, i) => {
                            return(
                                <MaL m1={m} i1={i+1} />
                            )
                        })
                    }

            </tbody>
            
          </Table>
        </div>
    )
}
function MarketList({m, i}) {
    return(
        <tr>
            <td>{i}</td>
            <td>{m.title}</td>
            <td>{m.count}</td>
        </tr>
    )
}
function MaL({m1,i1}) {
    return(
        <tr>
            <td>{i1}</td>
            <td>{m1.id}</td>
            <td>{m1.title}</td>
            <td>{m1.price}</td>
            <td>{m1.content}</td>
        </tr>
    )
}
export default Cart;

*/