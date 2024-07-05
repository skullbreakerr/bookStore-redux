import { createSlice } from '@reduxjs/toolkit';
import { uiSliceAction } from '.';
const INITIAL_CART_VAL = {
    items: [],
    totalQuantity: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_CART_VAL,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItems = state.items.find(item => item.id === newItem.id)

            if (existingItems) {
                existingItems.quantity++;
                existingItems.totalPrice = existingItems.totalPrice + newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            }
        },
        removeFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== newItem.id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - newItem.price;
            }
        }
    }
});

function fetchCartData(){
    return async (dispatch)=>{
        const fetchData = async () => {
            const response = await fetch('https://fir-tutorial-71007-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')

            if(!response.ok){
                throw new Error ("Error in Fetching the data.");
            }
            const data = await response.json();
            
            return data;
        }

        try{
            const responseData = await fetchData();
        }catch(error){
            Error(error);
            dispatch({
                status:"error",
                message:"initially fetching the data failed !!",
                title:"fetchData Failed"
            })
        }
    }
}

// function sendCartData(cartData){
//     return (dispatchFunction)=>{
//         dispatchFunction(
//             uiSliceAction.showNotification({
//                 status:
//             })
//         )
//     }
// }
export default cartSlice;