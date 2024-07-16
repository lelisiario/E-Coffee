import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from '../../utils/GlobalState'
import breakfastBlend from '../../assets/breakfastBlend.png'
import coffeeBeans from '../../assets/coffeeBeans.png';
import coffeeSample from '../../assets/coffeeSample.png'
import coffeeStix from '../../assets/coffeeStix.png'
import decafPod from '../../assets/decafPod.png'
import espressoBlend from '../../assets/espressoBlend.png'
import espressoPods from '../../assets/espressoPods.png'
import espressoStix from '../../assets/espressoStix.png'
import hazelnutPod from '../../assets/hazelnutPod.png'
import hojicha from '../../assets/hojicha.png'
import hojichaLatte from '../../assets/hojichaLatte.png'
import hojichaStix from '../../assets/hojichaStix.png'
import matcha from '../../assets/matcha.png'
import matchaStix from '../../assets/matchaStix.png'
import matchaLatte from '../../assets/matchaLatte.png'
import mugs from '../../assets/mugs.png'
import grinder from '../../assets/grinder.png'
import tumbler from '../../assets/tumbler.png'
import vanillaPod from '../../assets/vanillaPod.png'

const imageMap = {
  breakfastBlend,
  coffeeBeans,
  coffeeSample,
  coffeeStix,
  decafPod,
  espressoBlend,
  espressoPods,
  espressoStix,
  matcha,
  matchaLatte,
  matchaStix,
  hojicha,
  hojichaLatte,
  hojichaStix,
  hazelnutPod,
  mugs,
  grinder,
  tumbler,
  vanillaPod
}



function ProductItem({ image, name, _id, quantity, price }) {
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
          src={imageMap[image]}
          style={{ height:'100px', width:'100px'}}
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
