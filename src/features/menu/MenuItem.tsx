import { formatCurrency } from '../../utils/helpers';
import { Pizza } from '../../utils/types';

type MenuItemProps = {
  pizza: Pizza;
};

const MenuItem = ({ pizza }: MenuItemProps) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  console.log(id);

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
