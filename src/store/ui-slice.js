import {createSlice} from'@reduxjs/toolkit';

export const uiSlice = createSlice({
    name:"ui",
    initialState:{
        isVisible:false,
        notification:null,
    },
    reducers:{
        toggleCart(state){
            state.isVisible = !state.isVisible;
        },
        showNotification(state,action){
            state.notification={
                status: action.payload.status,
                message: action.payload.message,
                title: action.payload.title,
            }
        }
    }

})

export default uiSlice;