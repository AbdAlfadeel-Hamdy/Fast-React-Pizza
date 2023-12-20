import { formatCurrency } from '../../utils/helpers';

type CartItemProps = {
  item: {
    pizzaId: string;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};

const CartItem = ({ item }: CartItemProps) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId);

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;
