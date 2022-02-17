
//add item to the cart
export const addItem = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

//delet item from the cart
export const deleteItem = (product) => {
    return {
        type: 'DELETEITEM',
        payload: product
    }
}



