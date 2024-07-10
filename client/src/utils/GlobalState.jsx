import { createContext, useContext, useReducer } from "react";
import CartReducer from './CartReducer'
import { reducer } from './reducers'

export const CartContext = createContext()

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, {products : [], categories : [], currentCategory : null})
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { ContextProvider, useCartContext };
