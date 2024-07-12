import { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const addItem = (product) => {
    if (!product.name) {
      return;
    }

    // const id = createID(cart);

    const newProduct = { ...product, quantity: 1 };

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
  useEffect(() => {
    console.log("cart: ", cart);
  }, [cart])
  return (
    <StoreContext.Provider value={{ cart, setCart, addItem, removeItem, products, setProducts, categories, setCategories, activeCategory, setActiveCategory }}>{children}</StoreContext.Provider>
  )
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider };
