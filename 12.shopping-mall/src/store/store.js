import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

export default configureStore({
    reducer : {
        // 내보내기에 등록
        user : user.reducer  //함수 바깥에다가 let user을 썼기때문에 .reducer 내보내기 역할을 하기때문에 반드시 써야함

    }
})