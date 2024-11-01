import { configureStore, createSlice } from "@reduxjs/toolkit";
import Purchased from "./Purchased";

const productsSlice=createSlice({
    name:"Products",
    initialState:{
        Veg:[{name:"Tomato",price:50},
            {name:"Potato",price:30},
            {name:"ladys finger",price:40},
            {name:"onions",price:80}
        ],
        NonVeg:[{name:"chicken",price:250.0},
            {name:"fish",price:500.0},
            {name:"mutton",price:1000.0},
            {name:"prawns",price:2000.0}
        ]
    },
    reducers:{}
});
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status=state.find(item=>item.name===action.payload.name);
            if(status){
                status.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        },
        increment:(state,action)=>{
            const status=state.find(item=>item.name===action.payload.name);
            if(status){
                status.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            const status=state.find(item=>item.name===action.payload.name);
            if(status&&status.quantity>1){
                status.quantity-=1;
            }
            else{
                 return state.filter(item=>item.name!==action.payload.name)
            }
        },
        remove:(state,action)=>{
            const status=state.find(item=>item.name===action.payload.name);
            if(status){
                 return state.filter(item=>item.name!==action.payload.name)
            }
        }
    }
});
const purchasedSlice = createSlice({
    name: "purchased",
    initialState: [],
    reducers: {
        addPurchase: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addPurchase } = purchasedSlice.actions;
export const {addToCart,increment,decrement,remove}=cartSlice.actions;
const store=configureStore({
    reducer:{Products:productsSlice.reducer,
        cart:cartSlice.reducer,
        purchased:purchasedSlice.reducer
    }
});
export default store;