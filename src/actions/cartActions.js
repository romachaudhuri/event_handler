// "use strict"
// add to cart
export function addToCart(book){
    return {
    type:"ADD_CART",
    payload:book
}
}
// UPDATE CART
export function deleteCartItem(cart){
    return {
    type:"DELETE_CART_ITEM",
    payload:cart
}
}

// UPDATE CART
export function updateCart(_id, unit){
    return {
    type:"UPDATE_CART",
    _id: _id,
    unit: unit
}
}