import Button from './Button';


// App에서 올때 () 안에 들어가는것 , 변수 이름이니까 내마음대로 !
/* 1. 부모로부터 변수의 값 넘겨받기
const Body = (props) => {
    return (
        <>            
                <h1>본문입니다</h1> 
                <p>{props.address}</p>
                <p>{props.user}</p>
        </>
    )
}
*/

// 2.1 객체 형태로 넘겨준 값 받기
/*
const Body = (props) => {
    return (
        <>            
                <h1>본문입니다</h1> 
                <p>{props.userInfo.name}님은{props.userInfo.addr}에 살고 있습니다.</p>
                <p>내가 좋아하는 것들은 {props.userInfo.likeList}의 {props.userInfo.likeList.length}개를 좋아합니다.</p>
                <p>그 중에서 가장 좋아하는 것은 {props.userInfo.likeList[1]}입니다.</p>
        </>
    )
}
*/

// 2.2 객체형태의 값을 풀어서 넘겨준 값 받기
/*
const Body = ({name, addr, likeList}) => {
    return (
        <>            
                <h1>본문입니다</h1> 
                <p>{name}님은{addr}에 살고 있습니다.</p>
                <p>내가 좋아하는 것들은 {likeList}의 {likeList.length}개를 좋아합니다.</p>
                <p>그 중에서 가장 좋아하는 것은 {likeList[1]}입니다.</p>
        </>
    )
}
*/

const Body = () => {
    function btnClick(e) {
        alert("button no!!!!!!!!!!!!!!!");
        console.log(e);
    }

    const btnProps = {
        text : "1번 버튼",
        color : "hotpink",
        a: "yellow",
        b:2,
        c:3
    }

    return (
        <>
            <h3>본문입니다</h3>
            <button onClick={btnClick}>A이벤트 버튼</button><br/><br/>
            <button onClick={btnClick}>B이벤트 버튼</button><br/><br/>
            <Button {...btnProps}/> <br/><br/>
            <Button />
        </>
    )
}


export default Body;