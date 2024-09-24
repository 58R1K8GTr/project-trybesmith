export type Product = {
  id: number;
  name: string;
  price: string;
  userId: number;
};

export type ProductWithoutId = {
  name: string;
  price: string;
  userId: number;
};