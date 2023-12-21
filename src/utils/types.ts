export type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

export type OrderType = {
  id: string;
  customer: string;
  status: string;
  priority: boolean;
  cart: [
    {
      pizzaId: number;
      name: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
    }
  ];
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
};
