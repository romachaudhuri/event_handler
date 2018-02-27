// "use strict"
//CART REDUCERS
export function cartReducers(state={cart:[]}, action){
switch(action.type){
case "ADD_BOOKS":
return {cart:[...state.cart,
...action.payload]}
break;

case "DELETE_CART_ITEM":
return {cart:[...state.cart,
...action.payload]}
break;

case "ADD_TO_CART":
return {cart:[...state.cart,
...action.payload]}
break;
}
return state
}