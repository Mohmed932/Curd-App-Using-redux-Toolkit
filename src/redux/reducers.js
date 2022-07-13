import {createSlice} from '@reduxjs/toolkit'


const initialState = {items:[]};

const Alldata = createSlice({
    name:'post',
    initialState,
    reducers:{
        Addposts:(state,action) => {
            state.items.push(action.payload)
        },
        Deleteposts:(state,action) => {
            state.items = state.items.filter(val=>val.id != action.payload)
        }
    }
}) 

 export const {Addposts,Deleteposts}  = Alldata.actions 

export default Alldata.reducer