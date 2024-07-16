
import {useStoreContext} from '../utils/GlobalState';

const ShoppingCart = () => {
    const { cart, setCart } = useStoreContext();



    // Calculate the total price of items in the cart
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Handle adding a product to the cart
    const handleAddProduct = (product) => {
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
    }

    const handleRemoveProduct = (product) => {
        setCart((prevItems) => {
            const existingItem = prevItems.find((item) => product._id === item._id);
            if (existingItem?.quantity > 1) {
                return prevItems.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return prevItems.filter((item) => item._id !== product._id);
            }
        });



    };
    return (
        <div className="shopping-cart">
            <h2>Coffee Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is decaffeinated!</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item._id}>
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span> Quantity: {item.quantity}</span>
                            <button onClick={() => handleAddProduct(item)}>+</button>
                            <button onClick={() => handleRemoveProduct(item)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Sub-Total: ${calculateTotalPrice()}</h3>
        </div>
    );
};

// const handleRemoveProduct = (productId) => {
//     setCartItems((prevItems) => {
//         const existingItem = prevItems.find((item) => item.id === productId);
//         if (existingItem.quantity > 1) {
//             return prevItems.map((item) =>
//                 item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
//             );
//         } else {
//             return prevItems.filter((item) => item.id !== productId);
//         }
//     });
// };

//   return (
//     <div className="shopping-cart">
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={product._id}>
//               <span>{product.name}</span>
//               <span>${product.price}</span>
//               <span>Quantity: {product.quantity}</span>
//               <button onClick={() => handleAddProduct(item)}>+</button>
//               <button onClick={() => handleRemoveProduct(product._id)}>-</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <h3>Total: ${calculateTotalPrice()}</h3>
//     </div>
//   );

export default ShoppingCart;