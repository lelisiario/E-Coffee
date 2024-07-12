import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_PRODUCTS } from '../../utils/queries';
import coffee_loader from '../../assets/coffee_loading.gif';

function ProductList() {
  const {products, setProducts, activeCategory} = useStoreContext();

  // const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      setProducts(data.products)
    }
  }, [data]);

  function filterProducts() {
    if (!activeCategory) {
      return products;
    }

    return products.filter(
      (product) => product.category._id === activeCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={coffee_loader} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
