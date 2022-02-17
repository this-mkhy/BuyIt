const cart = []

const handlCart = (state=cart, action) => {
    const product = action.payload

    switch(action.type){
        case "ADDITEM":
            //check if the product is in the cart
            const exist1 = state.find(x => x.id === product.id)
            if(exist1){
                //increase the quantity
                return state.map(x => 
                    x.id === product.id ? {...x, qty: x.qty + 1} : x)
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;

        case "DELETEITEM":
            //check if the product is in the cart
            const exist2 = state.find(x => x.id === product.id)
            if(exist2.qty === 1 ){
                //increase the quantity
                return state.filter(x => x.id !== exist2.id )
            }else{
                return state.map(x => x.id === product.id ? {...x, qty: x.qty-1} : x)
            }
            break;

        default:
            return state;
            break;
    }
  
}

export default handlCart
