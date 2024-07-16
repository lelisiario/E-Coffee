import { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const emptyCart = () => {
    setCart([])
  };

  const addItem = (product) => {
    if (!product.name) {
      return;
    }

    setCart((prevItems) => {
      console.log(prevItems)
      console.log(product)
      const existingItem = prevItems.find((item) => product._id === item._id);
      if (existingItem) {
          return prevItems.map((item) =>
              item._id === product._id ? { ...product, quantity: item.quantity + 1 } : item
          );
      } else {
          return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (product) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => product._id === item._id);
      if (existingItem?.quantity > 1) {
          return prevItems.map((item) =>
              item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
          );
      } else {
          return prevItems.filter((item) => item._id !== product._id);
      }
    })
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
    <StoreContext.Provider value={{ cart, emptyCart, setCart, addItem, removeItem, products, setProducts, categories, setCategories, activeCategory, setActiveCategory }}>{children}</StoreContext.Provider>
  )
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider };
