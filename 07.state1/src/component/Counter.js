import { useState } from 'react';

const Counter= () => {
    // const count = 1;
    const [count, setCount] = useState(1); 
    // 1로 초기화 하라는 소리, const count = 1;랑 똑같은 의미
    // const [count] = useState(1); 쓰려면 import를 해야함.
    // 자동으로 재랜더링을 해준다.
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>+</button>&emsp;
            <button onClick={() => {setCount(count-1)}}>-</button>&emsp;
        </>

    )
}

export default Counter;