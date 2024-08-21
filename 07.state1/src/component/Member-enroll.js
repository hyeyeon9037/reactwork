// 이름, 생년월일, 주소, 자기소개

import { useState } from "react";

const Member_enroll = () => {
    const [input, setInput] = useState({
        name : "",
        // birth : "", 생일은 선택하는 거라서 굳이 안넣어줘도 된다.
        location : "",
        mylife : ""
    });

    // useState()
    // >> 여기서는 () 안에 return안에 변수가 많기 때문에 객체를 넣어준다.


    const onChange2 = (e) => {
        console.log(e.target.name + " : " + e.target.value )
        setInput({
            ...input, // 객체나 배열은 이렇게 풀어줘야함
            [e.target.name] : e.target.value
        })
    }


    return (
        <>
            <h1>회원 가입</h1>
            이름 : <input name="name" onChange={onChange2} ></input> <br/><br/>
            생년월일 : <input type="date" name="birth"></input> <br/><br/>
            거주지 :
            <select name="location" onChange={onChange2} >
                <option value="">선택</option>
                <option value="seoul">서울특별시</option>
                <option value="incheon">인천광역시</option>
                <option value="busan">부산광역시</option>
            </select> <br/><br/>
            <textarea name="mylife" />

        </>
    )
}

export default Member_enroll;