import {configureStore, createSlice} from '@reduxjs/toolkit'
import  user from './userSlice';

let stock = createSlice({
    name: 'stock',
    initialState : [10, 11, 12]
})

let jacket = createSlice({
    name: 'jacket',
    initialState : [   
        {id:0,title:"ddd",count:1},
        {id:1,title:"ㅋㅋㅋ",count:2}
    ]
})

export default configureStore({
    reducer : {
        // 내보내기에 등록
        member : user.reducer,  //함수 바깥에다가 let user을 썼기때문에 .reducer 내보내기 역할을 하기때문에 반드시 써야함
 // ↑Cart에있는 member ↑에 있는 user은 4번째줄 user를 말하는것
        stock : stock.reducer,
        jacket : jacket.reducer
        
    }
})

/*

import {configureStore, createSlice} from '@reduxjs/toolkit';
import pList from './../data/ProductList';


let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let market = createSlice({
    name : 'market',
    initialState : [{id:0, title: 'coat', count: 2},
        {id:2, title: 'jeans', count: 1}]
})

let ma = createSlice({
    name : 'ma',
    initialState : pList
})
export default configureStore({
    reducer : {
        // 내보내기에 등록
        member : user.reducer,
        stock : stock.reducer,
        market : market.reducer,
        ma1 : ma.reducer
    }
})

*/