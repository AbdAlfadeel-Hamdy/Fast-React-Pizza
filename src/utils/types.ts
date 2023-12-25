export type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

export type CartPizza = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type CreatedOrder = {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartPizza[];
};

export type OrderType = {
  id: string;
  customer: string;
  status: string;
  priority: boolean;
  cart: CartPizza[];
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
};
