import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import './category.css'

function CategoryMenu() {
  const { categories, setCategories, setActiveCategory } = useStoreContext();

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData.categories)
    }
  }, [categoryData]);

  const handleClick = (id) => {
    setActiveCategory(id)
  };

  return (
    <div>
      <br />
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          className='category'
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button onClick={() => { handleClick('') }}>All</button>
    </div>
  );
}

export default CategoryMenu;
