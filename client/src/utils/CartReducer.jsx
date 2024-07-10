export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price , 0)
}


const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            // return [...state, action.product]
            return {...state, products: [...state.products, action.product]}

        case "Remove":
            // return state.filter( p => p.id !== action.id)
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.id),
            };

        case "Increase":
            // const IndexI = state.findIndex( p => p.id === action.id)
            // state[IndexI].quantity += 1 
            // return [...state]

            const updatedProducts = state.products.map(product => {
                if (product.id === action.id) {
                  return {
                    ...product,
                    quantity: product.quantity + 1,
                  };
                }
                return product;
            });
        
            return {
                ...state,
                products: updatedProducts,
            };

        case "Decrease":
            // const IndexD = state.findIndex( p => p.id === action.id)
            // state[IndexD].quantity -= 1 
            // return [...state]
            const decreasedProducts = state.products.map(product => {
                if (product.id === action.id) {
                  return {
                    ...product,
                    quantity: Math.max(0, product.quantity - 1),  // Ensure quantity doesn't go below zero
                  };
                }
                return product;
            });
        
            return {
                ...state,
                products: decreasedProducts,
            };
        

        default: 
            state;
    }
}

export default CartReducer