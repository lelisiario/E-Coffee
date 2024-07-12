import { createContext, useContext, useState } from "react";
import createID from './createID';

const StoreContext = createContext();
const { Provider } = StoreContext;

export const useStoreContext = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const addItem = (product) => {
    if (!product.name) {
      return;
    }

    const id = createID(cart);

    const newProduct = {...product, id};

    setCart([...cart, newProduct]);
  };

  const removeItem = (id) => {
    const newCartList = cart.filter((product) => product.id !== id);
    
    setCart(newCartList);
  };

  const [activeCategory, setActiveCategory] = useState(null)
  // const [state, dispatch] = useReducer(reducer, {
  //   products: [],
  //   categories: [],
  //   currentCategory: '',
  // });

  return (
    <StoreContext.Provider value={{ cart, setCart, addItem, removeItem, products, setProducts, categories, setCategories, activeCategory, setActiveCategory }}>{children}</StoreContext.Provider>
  )
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider };
