import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from '../../utils/GlobalState';

function ProductItem({image, name, _id, quantity, price}) {
  const item = {
    image,
    name,
    _id,
    price,
    quantity
  };

  const { addItem } = useStoreContext();
  const handleClick = (item) => {
    addItem(item)
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", item.quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={() => {
            handleClick(item);
          }}
      >Add to cart</button>
    </div>
  );
}

export default ProductItem;
