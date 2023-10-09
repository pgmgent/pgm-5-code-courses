export type Product = {
  id: number;
  item: string;
  voorraad: number;
  description?: string;
  image?: string;
};

export type Data = Product[];
