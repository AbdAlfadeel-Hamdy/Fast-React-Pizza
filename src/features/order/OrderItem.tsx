import { formatCurrency } from "../../utils/helpers";
import { CartPizza } from "../../utils/types";

type OrderItemProps = {
  item: CartPizza;
  isLoadingIngredients: boolean;
  ingredients: string[] | undefined;
};

const OrderItem = ({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
};

export default OrderItem;
