import { ReactNode } from 'react';

export interface IProductsProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsContext {
  productsList: IProduct[] | [];
  productsCartList: IProduct[];
  addToCart: (productID: number) => void;
  removeFromCart: (productID: number) => void;
  cleanCart: () => void;
}
