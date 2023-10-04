
export type CartProps = {
  cart: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
}